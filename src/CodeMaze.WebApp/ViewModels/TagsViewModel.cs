using Microsoft.AspNetCore.Http;
using CodeMaze.Configuration;

namespace CodeMaze.WebApp.ViewModels
{
    public class TagsViewModel : BaseVM
    {
        public TagsViewModel(IBlogConfig blogConfig, IHttpContextAccessor httpContextAccessor) : base(blogConfig, httpContextAccessor)
        {
        }
    }
}