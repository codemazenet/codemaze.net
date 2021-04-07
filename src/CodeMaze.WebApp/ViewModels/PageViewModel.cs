using Microsoft.AspNetCore.Http;
using CodeMaze.Configuration;

namespace CodeMaze.WebApp.ViewModels
{
    public class PageViewModel : BaseVM
    {
        public PageViewModel(IBlogConfig blogConfig, IHttpContextAccessor httpContextAccessor) : base(blogConfig, httpContextAccessor)
        {
        }

        public object Items { get; set; }
        public object Title { get; set; }
        public string Token { get; set; }
    }
}