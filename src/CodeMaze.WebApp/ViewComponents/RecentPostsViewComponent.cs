using CodeMaze.Configuration;
using CodeMaze.Data.Systems;
using CodeMaze.Service;
using CodeMaze.ViewModels;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeMaze.WebApp.ViewComponents
{
    public class RecentPostsViewComponent : KaizinViewComponent
    {
        private readonly PostService _postService;

        private readonly IBlogConfig _blogConfig;

        public RecentPostsViewComponent(
            ILogger<HotTagsViewComponent> logger,
            IOptions<AppSettings> settings,
            PostService postService,
            IBlogConfig blogConfig) : base(logger, settings)
        {
            _postService = postService;
            _blogConfig = blogConfig;
        }

        public async Task<IViewComponentResult> InvokeAsync(CategoryRequestViewModel category)
        {
            var response = await _postService.GetRecentPostsAsync(category);

            if (response.IsSuccess)
            {
                return View(response.Item.ToList());
            }

            ViewBag.ComponentErrorMessage = response.Message;

            return View(new List<RecentPostViewModel>());
        }
    }
}