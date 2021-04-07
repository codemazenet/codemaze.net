using Microsoft.AspNetCore.Http;
using CodeMaze.Configuration;
using CodeMaze.Data.ViewModels;
using System.Collections.Generic;

namespace CodeMaze.WebApp.ViewModels
{
    public class PostViewViewModel : BaseVM
    {
        public PostItem Item { get; set; }
        public List<RelatedPostViewModel> RelatedPosts { get; set; }
        public UserClaim Author { get; set; }
        public string Token { get; set; }

        public PostViewViewModel(IBlogConfig blogConfig, IHttpContextAccessor httpContextAccessor) : base(blogConfig, httpContextAccessor)
        {
            RelatedPosts = new List<RelatedPostViewModel>();
        }
    }
}