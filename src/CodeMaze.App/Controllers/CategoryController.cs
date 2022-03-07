using CodeMaze.Caching;
using CodeMaze.Service.Factory;
using CodeMaze.ViewModels;

using Microsoft.AspNetCore.Mvc;

namespace CodeMaze.App.Controllers
{
    public partial class CategoryController : BaseController
    {
        private readonly ILogger<HomeController> logger;
        private readonly IBlogCache blogCache;

        public CategoryController(
            RepositoryFactory repositoryFactory,
            CommonFactory commonFactory,
            ILogger<HomeController> logger,
            IBlogCache blogCache)
            : base(repositoryFactory, commonFactory)
        {
            this.logger = logger;
            this.blogCache = blogCache;
        }

        [Route("/category/{url}-{code}.html")]
        public async Task<IActionResult> CategoriesAsync(string url, string code, [FromQuery] int page = 1)
        {
            if (string.IsNullOrWhiteSpace(url) || string.IsNullOrWhiteSpace(code)) return NotFound();

            if (page < 1) page = 1;
            var size = 12;

            var category_name = await repository.Category.GetNameAsync(url, code);
            var posts = await repository.Post.GetPostItemListByCategoryAsync(url.Trim().ToLower(), code.Trim(), page, size);

            var pageview = new PageListView<PostItem>(posts, page) { PageTitle = category_name };

            if (posts?.Any() == true)
            {
                var total = blogCache.GetOrCreate(CacheDivision.PostCountCategory, "post_count_publish" + code.Trim(), count => repository.Post.CountPostPublish(url, code));

                pageview.Total = (int)Math.Ceiling((decimal)total / size);
            }

            return View("PostsView", pageview);
        }
    }
}
