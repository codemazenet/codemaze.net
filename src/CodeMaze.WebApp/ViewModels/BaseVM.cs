using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using CodeMaze.Configuration;
using CodeMaze.Data.ViewModels;
using CodeMaze.Extension;
using CodeMaze.Library;
using System;

namespace CodeMaze.WebApp.ViewModels
{
    public abstract class BaseVM : BaseViewModel
    {
        protected readonly IBlogConfig _blogConfig;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public BaseVM(IBlogConfig blogConfig, IHttpContextAccessor httpContextAccessor)
        {
            _blogConfig = blogConfig;
            _httpContextAccessor = httpContextAccessor;

            var data = new TokenValidateViewModel
            {
                SessionId = Guid.NewGuid(),
                Time = DateTime.Now.ToFileTime(),
                Token = CodeMazeConfiguration.TokenValidatePost
            };

            KyzinToken = new AesEncryptionService(new KeyInfo(CodeMazeConfiguration.Encryption)).Encrypt(JsonConvert.SerializeObject(data));

            if (_httpContextAccessor.HttpContext.Session.HasValue(SessionHelper.SessionLogin))
            {
                UserClaim = _httpContextAccessor.HttpContext.Session.Get<UserClaim>(SessionHelper.SessionLogin);
            }
        }
    }
}