using CodeMaze.Configuration;
using CodeMaze.Cryptography;

using Microsoft.AspNetCore.Http;

namespace CodeMaze.WebApp.ViewModels
{
    public class AboutViewModel : BaseVM
    {
        public AboutViewModel(
            IBlogConfig blogConfig,
            IHttpContextAccessor httpContextAccessor,
            ISymmetricEncryptor aceEncryptor) :
            base(blogConfig, httpContextAccessor, aceEncryptor)
        {
        }
    }
}