using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;

//using CodeMaze.Extension.Firebase;
//using CodeMaze.Extension.AesEncryption;
using CodeMaze.Data.Systems;
using CodeMaze.Data.ViewModels;
using CodeMaze.Library;
using System.Collections.Generic;
using System.Linq;
using CodeMaze.Cryptography;

namespace CodeMaze.Configuration
{
    public static class CodeMazeConfiguration
    {
        public static string ApplicationName { get; set; }
        public static string DefaultSlogan { get; set; }
        public static string TokenValidatePost { get; set; }
        public static AppSettings AppSettings { get; set; }
        //public static EncryptionInfo Encryption { get; set; }
        public static string BaseUrl { get; set; }
        public static string DateTimeFormat { get; set; }
        public static int PageSize { get; set; }
        public static int RelatedPostSize { get; set; }
        public static string ConnectionString { get; set; }
        //public static DatabaseInfo DatabaseInfo { get; set; }
        //public static FirebaseAuthInfo FirebaseAuth { get; set; }

        public static void RunKyzinConfigure(this IServiceCollection services, IConfiguration configuration)
        {
            ApplicationName = configuration.GetSection(Constants.ApplicationName).Value;
            DefaultSlogan = configuration.GetSection(Constants.DefaultSlogan).Value;
            //Encryption = configuration.GetSection(nameof(Encryption)).GetChildren().GetObjectFromSession<EncryptionInfo>();
            //FirebaseAuth = configuration.GetSection(nameof(FirebaseAuthInfo)).GetChildren().GetObjectFromSession<FirebaseAuthInfo>();
            AppSettings = configuration.GetSection(nameof(AppSettings)).GetChildren().GetObjectFromSession<AppSettings>();
            //DatabaseInfo = configuration.GetSection(nameof(DatabaseInfo)).GetChildren().GetObjectFromSession<DatabaseInfo>();
            BaseUrl = configuration.GetSection(Constants.BaseUrl).Value;
            DateTimeFormat = configuration.GetSection(Constants.DateTimeFormat).Value;
            TokenValidatePost = configuration.GetSection(Constants.TokenValidatePost).Value;
            PageSize = int.Parse(configuration.GetSection(Constants.PageSize).Value);
            RelatedPostSize = int.Parse(configuration.GetSection(Constants.RelatedPostSize).Value);

            var connectionEncrypt = configuration.GetConnectionString("DatabaseLocalConfig");
            if (!string.IsNullOrWhiteSpace(connectionEncrypt))
                ConnectionString = Base64Encryptor.Decrypt(connectionEncrypt);
        }

        private static T GetObjectFromSession<T>(this IEnumerable<IConfigurationSection> sections)
        {
            if (sections?.Count() > 0)
            {
                var data = JsonConvert.DeserializeObject<T>(JsonConvert.SerializeObject(sections.ToDictionary(x => x.Key, x => x.Value)));

                var properties = data.GetType().GetProperties();

                foreach (var property in properties)
                {
                    if (property.GetValue(data, null) == null)
                    {
                        var childData = sections.FirstOrDefault(x => x.Key.Equals(property.Name)).GetChildren().ToDictionary(x => x.Key, x => x.Value);
                        if (childData.Count > 0)
                        {
                            var objectData = JsonConvert.DeserializeObject(JsonConvert.SerializeObject(childData), property.PropertyType);
                            property.SetValue(data, objectData);
                        }
                    }
                }

                return data;
            }
            return default(T);
        }
    }
}