using CodeMaze.Cryptography;
using CodeMaze.Cryptography.Symmetric;
using CodeMaze.Data.RequestResponse;

using Dapper;

using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

using Newtonsoft.Json;

using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace CodeMaze.Configuration
{
    public class BlogConfig : IBlogConfig
    {
        private readonly ILogger<BlogConfig> _logger;

        private readonly IAesEncryptor _encryptionService;

        public BlogOwnerSettings BlogOwnerSettings { get; set; }

        public GeneralSettings GeneralSettings { get; set; }

        public ContentSettings ContentSettings { get; set; }

        public EmailSettings EmailSettings { get; set; }

        public FeedSettings FeedSettings { get; set; }

        public WatermarkSettings WatermarkSettings { get; set; }
        public int PageSize { get; set; }

        private bool _hasInitialized;

        public BlogConfig(
            ILogger<BlogConfig> logger,
            IAesEncryptor encryptionService,
            IConfiguration configuration)
        {
            _encryptionService = encryptionService;
            _logger = logger;

            BlogOwnerSettings = new BlogOwnerSettings();
            ContentSettings = new ContentSettings();
            GeneralSettings = new GeneralSettings();
            EmailSettings = new EmailSettings();
            FeedSettings = new FeedSettings();
            WatermarkSettings = new WatermarkSettings();

            Initialize();
        }

        private void Initialize()
        {
            if (!_hasInitialized)
            {
                var cfgDic = GetAllConfigurations();

                BlogOwnerSettings = JsonConvert.DeserializeObject<BlogOwnerSettings>(cfgDic[nameof(BlogOwnerSettings)]);
                GeneralSettings = JsonConvert.DeserializeObject<GeneralSettings>(cfgDic[nameof(GeneralSettings)]);
                ContentSettings = JsonConvert.DeserializeObject<ContentSettings>(cfgDic[nameof(ContentSettings)]);

                EmailSettings = JsonConvert.DeserializeObject<EmailSettings>(cfgDic[nameof(EmailSettings)]);
                if (!string.IsNullOrWhiteSpace(EmailSettings.SmtpPassword))
                {
                    EmailSettings.SmtpClearPassword = DecryptPassword(EmailSettings.SmtpPassword);
                }

                FeedSettings = JsonConvert.DeserializeObject<FeedSettings>(cfgDic[nameof(FeedSettings)]);
                WatermarkSettings = JsonConvert.DeserializeObject<WatermarkSettings>(cfgDic[nameof(WatermarkSettings)]);

                _hasInitialized = true;
            }
        }

        public async Task<Response> SaveConfigurationAsync<T>(T appSettings) where T : IAppSettings
        {
            async Task<int> SetConfiguration(string key, string value)
            {
                using (var conn = new SqlConnection(CodeMazeConfiguration.ConnectionString))
                {
                    string sql = $"UPDATE {nameof(BlogConfiguration)} " +
                                 $"SET {nameof(BlogConfiguration.CfgValue)} = @value, {nameof(BlogConfiguration.LastModifiedTimeUtc)} = @lastModifiedTimeUtc " +
                                 $"WHERE {nameof(BlogConfiguration.CfgKey)} = @key";

                    return await conn.ExecuteAsync(sql, new { key, value, lastModifiedTimeUtc = DateTime.UtcNow });
                }
            }

            try
            {
                var json = appSettings.GetJson();
                int rows = await SetConfiguration(typeof(T).Name, json);
                return new Response(rows > 0);
            }
            catch (Exception e)
            {
                _logger.LogError(e, e.Message);
                return new FailedResponse((int)ResponseFailureCode.GeneralException, e.Message, e);
            }
        }

        public string EncryptPassword(string clearPassword)
        {
            var str = _encryptionService.Encrypt(clearPassword);
            return str;
        }

        public void RequireRefresh()
        {
            _hasInitialized = false;
        }

        private string DecryptPassword(string encryptedPassword)
        {
            var str = _encryptionService.Decrypt(encryptedPassword);
            return str;
        }

        private IDictionary<string, string> GetAllConfigurations()
        {
            try
            {
                using (var conn = new SqlConnection(CodeMazeConfiguration.ConnectionString))
                {
                    string sql = $"SELECT CfgKey, CfgValue FROM {nameof(BlogConfiguration)}";
                    var data = conn.Query<(string CfgKey, string CfgValue)>(sql);
                    var dic = data.ToDictionary(c => c.CfgKey, c => c.CfgValue);
                    return dic;
                }
            }
            catch (Exception e)
            {
                _logger.LogCritical(e, $"Error {nameof(GetAllConfigurations)}");
                throw;
            }
        }
    }
}