using CodeMaze.Configuration;
using CodeMaze.Cryptography.Symmetric;
using CodeMaze.Data.ViewModels;

using Microsoft.AspNetCore.Http;

using System.Collections.Generic;

namespace CodeMaze.WebApp.ViewModels
{
    public class PostViewViewModel : BaseVM
    {
        public PostItem Item { get; set; }
        public List<RelatedPostViewModel> RelatedPosts { get; set; }
        public UserClaim Author { get; set; }
        public string Token { get; set; }

        public PostViewViewModel(
            IBlogConfig blogConfig,
            IHttpContextAccessor httpContextAccessor,
            IAesEncryptor aceEncryptor)
            : base(blogConfig, httpContextAccessor, aceEncryptor)
        {
            RelatedPosts = new List<RelatedPostViewModel>();
        }
    }
}