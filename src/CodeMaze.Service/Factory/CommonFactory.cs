using AutoMapper;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using CodeMaze.Data.Systems;
using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Http;
using CodeMaze.Configuration;
using CodeMaze.Library;

namespace CodeMaze.Service.Factory
{

    public class CommonFactory
    {
        public readonly ILogger<CommonFactory> Logger;
        public readonly IOptions<AppSettings> Settings;
        public readonly IMapper Mapper;
        public readonly IBlogConfig BlogConfig;
        public readonly IAesEncryptionService AesEncryption;
        public readonly IHttpContextAccessor HttpContextAccessor;

        public CommonFactory(
            ILogger<CommonFactory> logger,
            IOptions<AppSettings> settings,
            IMapper mapper,
            IBlogConfig blogConfig,
            IAesEncryptionService aesEncryption,
            IHttpContextAccessor httpContextAccessor)
        {
            if (logger != null) this.Logger = logger;
            if (settings != null) this.Settings = settings;
            if (mapper != null) this.Mapper = mapper;
            if (blogConfig != null) this.BlogConfig = blogConfig;
            if (aesEncryption != null) this.AesEncryption = aesEncryption;
            if (httpContextAccessor != null) this.HttpContextAccessor = httpContextAccessor;
        }
    }
}
