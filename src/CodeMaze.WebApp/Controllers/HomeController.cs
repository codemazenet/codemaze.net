using CodeMaze.Configuration;
using CodeMaze.Data.ViewModels;
using CodeMaze.Service.Factory;
using CodeMaze.WebApp.ViewModels;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;

using System.Diagnostics;
using System.Threading.Tasks;

using X.PagedList;

namespace CodeMaze.WebApp.Controllers
{
    [AllowAnonymous]
    public class HomeController : BaseController
    {
        public HomeController(
            RepositoryFactory repositoryFactory,
            CommonFactory commonFactory)
            : base(repositoryFactory, commonFactory)
        { }

        [Route("/{page?}"), Route("index.html")]
        public async Task<IActionResult> Index(int page = 1, [FromServices] IMemoryCache memoryCache = null)
        {
            var pageView = new PageViewModel(commonFactory.BlogConfig, commonFactory.HttpContextAccessor, commonFactory.AesEncryption);

            var postList = repositoryFactory.Post.GetPagedPostsAsync(CodeMazeConfiguration.PageSize, page);

            if (postList?.Count > 0)
            {
                var token = postList.Count == CodeMazeConfiguration.PageSize ? commonFactory.AesEncryption.Encrypt((page + 1).ToString()) : string.Empty;

                int postCount = memoryCache.GetOrCreate(StaticCacheKeys.PostCount, entry => repositoryFactory.Post.CountVisiblePosts());

                var postsAsIPagedList = new StaticPagedList<PostListItem>(postList, page, CodeMazeConfiguration.PageSize, postCount);

                pageView.Items = postsAsIPagedList;
                pageView.Token = token;
            }

            return View(pageView);
        }

        [Route("/about.html")]
        public IActionResult About()
        {
            return View(new TagsViewModel(commonFactory.BlogConfig, commonFactory.HttpContextAccessor, commonFactory.AesEncryption));
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}