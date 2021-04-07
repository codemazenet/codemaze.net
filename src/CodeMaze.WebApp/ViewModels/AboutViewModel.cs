using CodeMaze.Configuration;
using CodeMaze.Cryptography;
using CodeMaze.Cryptography.Symmetric;

using Microsoft.AspNetCore.Http;

namespace CodeMaze.WebApp.ViewModels
{
    public class AboutViewModel : BaseVM
    {
        public AboutViewModel(
            IBlogConfig blogConfig,
            IHttpContextAccessor httpContextAccessor,
            IAesEncryptor aceEncryptor) :
            base(blogConfig, httpContextAccessor, aceEncryptor)
        {
        }
    }
}