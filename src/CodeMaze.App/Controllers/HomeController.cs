using CodeMaze.Caching;
using CodeMaze.Service.Factory;
using CodeMaze.ViewModels;

using Microsoft.AspNetCore.Mvc;

namespace CodeMaze.App.Controllers
{
    public class HomeController : BaseController
    {
        public HomeController(
            ILogger<HomeController> logger,
            RepositoryFactory repositoryFactory,
            CommonFactory commonFactory,
            IBlogCache blogCache)
            : base(repositoryFactory, commonFactory)
        {
            _logger = logger;
            this.repositoryFactory = repositoryFactory;
            this.commonFactory = commonFactory;
            this.blogCache = blogCache;
        }

        private readonly ILogger<HomeController> _logger;
        private readonly RepositoryFactory repositoryFactory;
        private readonly CommonFactory commonFactory;
        private readonly IBlogCache blogCache;

        [Route("/"), Route("/index.html")]
        public async Task<IActionResult> Index(int page = 1)
        {
            if (page < 1) page = 1;
            var size = 12;

            var posts = await repository.Post.GetPostItemListAsync(page, size);

            var pageview = new PageListView<PostItem>(posts, page);

            if (posts?.Any() == true)
            {
                var total = blogCache.GetOrCreate(CacheDivision.Post, "post_count_publish", count => repository.Post.CountPostPublish());

                pageview.Total = (int)Math.Ceiling((decimal)total / size);
            }

            return View("View", pageview);
        }

        [Route("/archive.html")]
        public IActionResult Archive()
        {
            return View();
        }

        [Route("/contact.html")]
        public IActionResult Contact()
        {
            return View();
        }

        //[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        //public IActionResult Error()
        //{
        //    return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        //}
    }
}