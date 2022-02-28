using CodeMaze.Configuration;
using CodeMaze.Service.Factory;
using CodeMaze.ViewModels;
using CodeMaze.WebApp.ViewModels;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;

using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using X.PagedList;

namespace CodeMaze.WebApp.Controllers
{
    public class TagController : BaseController
    {
        public TagController(
            RepositoryFactory repositoryFactory,
            CommonFactory commonFactory)
            : base(repositoryFactory, commonFactory)
        { }

        [Route("/tags.html")]
        public IActionResult Index()
        {
            return View("TagList", new TagsViewModel(commonFactory.BlogConfig, commonFactory.HttpContextAccessor, commonFactory.AesEncryption));
        }

        [Route("/tag/{normalizedName}.html")]
        public async Task<IActionResult> GetPostsByTagAsync(string normalizedName, int page = 1, [FromServices] IMemoryCache memoryCache = null)
        {
            if (string.IsNullOrEmpty(normalizedName))
                return NotFound();

            if (page < 1) page = 1;

            var result = await repositoryFactory.Post.GetByTagNameAsync(normalizedName, CodeMazeConfiguration.PageSize, page);

            if (!result.IsSuccess)
            {
                return NotFound();
            }
            var tag = repositoryFactory.Tag.GetTag(normalizedName);

            var pageView = new PageViewModel(commonFactory.BlogConfig, commonFactory.HttpContextAccessor, commonFactory.AesEncryption);
            pageView.Title = new TagTitleViewModel { Name = tag.TagName };
            ViewData["Title"] = tag.TagName;

            var postList = result.Item;

            if (postList?.Count > 0)
            {
                var token = postList.Count == CodeMazeConfiguration.PageSize ? commonFactory.AesEncryption.Encrypt((page + 1).ToString()) : string.Empty;

                int postCount = memoryCache.GetOrCreate($"{StaticCacheKeys.TagCount}-{normalizedName}", entry => repositoryFactory.Post.CountVisiblePostsByTagName(normalizedName));

                var postsAsIPagedList = new StaticPagedList<PostListItem>(postList, page, CodeMazeConfiguration.PageSize, postCount);

                pageView.Items = postsAsIPagedList;
                pageView.Token = token;
            }

            return View("GetPostsByTag", pageView);
        }

        [Route("/Api/Tag/Suggestion")]
        [Authorize]
        [HttpGet]
        public async Task<List<string>> GetTagSuggestionAsync()
        {
            var listTagName = await repositoryFactory.Tag.GetTagSuggestionAsync();

            return listTagName.ToList();
        }
    }
}