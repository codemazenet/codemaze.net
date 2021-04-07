using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using CodeMaze.Configuration;
using CodeMaze.Data.ViewModels;
using CodeMaze.Service.Factory;
using CodeMaze.WebApp.ViewModels;
using System.Threading.Tasks;
using X.PagedList;

namespace CodeMaze.WebApp.Controllers
{
    [Route("category")]
    public partial class CategoryController : BaseController
    {
        public CategoryController(
            RepositoryFactory repositoryFactory,
            CommonFactory commonFactory)
            : base(repositoryFactory, commonFactory)
        { }

        [Route("/category/{url}-{code}.html")]
        public async Task<IActionResult> GetPostsByCategory(string url, string code, int page = 1, [FromServices] IMemoryCache memoryCache = null)
        {
            var pageView = new PageViewModel(commonFactory.BlogConfig, commonFactory.HttpContextAccessor);

            if (string.IsNullOrEmpty(url) || string.IsNullOrEmpty(code))
                return View("NotFound", pageView);

            if (page < 1) page = 1;

            var request = new CategoryRequestViewModel { Url = url, Code = code };

            var category = memoryCache.GetOrCreate($"{StaticCacheKeys.CategoryName}-{code}", entry => repositoryFactory.Category.GetAsync(url, code).Result);
            if (category != null)
            {
                pageView.Title = new CategoryTitleViewModel { Name = category.DisplayName, Note = category.Note };
                ViewData["Title"] = category.DisplayName;
            }

            var result = await repositoryFactory.Post.GetPostsByCategoryAsync(request, CodeMazeConfiguration.PageSize, page);

            if (!result.IsSuccess)
            {
                return View("NotFound", pageView);
            }

            var postList = result.Item;

            if (postList?.Count > 0)
            {
                var token = postList.Count == CodeMazeConfiguration.PageSize ? commonFactory.AesEncryption.Encrypt((page + 1).ToString()) : string.Empty;

                int postCount = memoryCache.GetOrCreate($"{StaticCacheKeys.PostCount}-{code}", entry => repositoryFactory.Post.CountVisiblePosts(url, code));

                var postsAsIPagedList = new StaticPagedList<PostListItem>(postList, page, CodeMazeConfiguration.PageSize, postCount);

                pageView.Items = postsAsIPagedList;
                pageView.Token = token;
            }

            return View(pageView);
        }
    }
}