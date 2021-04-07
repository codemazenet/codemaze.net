using Microsoft.AspNetCore.Http;
using CodeMaze.Configuration;

namespace CodeMaze.WebApp.ViewModels
{
    public class AboutViewModel : BaseVM
    {
        public AboutViewModel(IBlogConfig blogConfig, IHttpContextAccessor httpContextAccessor) : base(blogConfig, httpContextAccessor)
        {
        }
    }
}