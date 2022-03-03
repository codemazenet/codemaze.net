using CodeMaze.Caching;
using CodeMaze.Service.Factory;
using CodeMaze.ViewModels;

using Microsoft.AspNetCore.Mvc;

namespace CodeMaze.App.Controllers
{
    public class PostController : BaseController
    {
        public PostController(
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
        public async Task<IActionResult> PostDetail(string url, string code)
        {
            var post = await repository.Post.GetPostAsync(url, code);

            if (post == null) return NotFound();

            var view = new PageView<PostView>(post);
            view.EnableSidebar = true;
            view.EnableComment = post.EnableComment;

            return View("PostDetail", view);
        }
    }
}
