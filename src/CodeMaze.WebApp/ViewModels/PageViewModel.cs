using CodeMaze.Configuration;
using CodeMaze.Cryptography.Symmetric;

using Microsoft.AspNetCore.Http;

namespace CodeMaze.WebApp.ViewModels
{
    public class PageViewModel : BaseVM
    {
        public PageViewModel(
            IBlogConfig blogConfig,
            IHttpContextAccessor httpContextAccessor,
            IAesEncryptor aceEncryptor)
            : base(blogConfig, httpContextAccessor, aceEncryptor)
        {
        }

        public object Items { get; set; }
        public object Title { get; set; }
        public string Token { get; set; }
    }
}