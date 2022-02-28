using CodeMaze.Caching;
using CodeMaze.Service.Factory;

using Microsoft.AspNetCore.Mvc;

namespace CodeMaze.App.Controllers
{
    public class PostsController : BaseController
    {
        public PostsController(
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


        [Route("/post/{url}-{code}.html")]
        public IActionResult PostDetail(string url, string code)
        {

            return View();
        }
    }
}
