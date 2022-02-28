using CodeMaze.Configuration;
using CodeMaze.Cryptography.Symmetric;
using CodeMaze.Extension;
using CodeMaze.ViewModels;

using Microsoft.AspNetCore.Http;

using Newtonsoft.Json;

using System;

namespace CodeMaze.WebApp.ViewModels
{
    public abstract class BaseVM : BaseViewModel
    {
        protected readonly IBlogConfig _blogConfig;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IAesEncryptor _aceEncryptor;

        public BaseVM(IBlogConfig blogConfig, IHttpContextAccessor httpContextAccessor, IAesEncryptor aceEncryptor)
        {
            _blogConfig = blogConfig;
            _httpContextAccessor = httpContextAccessor;
            this._aceEncryptor = aceEncryptor;
            var data = new TokenValidateViewModel
            {
                SessionId = Guid.NewGuid(),
                Time = DateTime.Now.ToFileTime(),
                Token = CodeMazeConfiguration.TokenValidatePost
            };

            MazeToken = _aceEncryptor.Encrypt(JsonConvert.SerializeObject(data));

            if (_httpContextAccessor.HttpContext.Session.HasValue(SessionHelper.SessionLogin))
            {
                UserClaim = _httpContextAccessor.HttpContext.Session.Get<UserClaim>(SessionHelper.SessionLogin);
            }
        }
    }
}