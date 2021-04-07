using CodeMaze.Configuration;
using CodeMaze.Cryptography.Symmetric;

using Microsoft.AspNetCore.Http;

namespace CodeMaze.WebApp.ViewModels
{
    public class TagsViewModel : BaseVM
    {
        public TagsViewModel(
            IBlogConfig blogConfig,
            IHttpContextAccessor httpContextAccessor,
            IAesEncryptor aceEncryptor)
            : base(blogConfig, httpContextAccessor, aceEncryptor)
        {
        }
    }
}