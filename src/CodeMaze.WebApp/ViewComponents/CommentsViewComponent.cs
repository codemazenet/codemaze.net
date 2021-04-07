using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using CodeMaze.Service;
using System;
using System.Threading.Tasks;

namespace CodeMaze.WebApp.ViewComponents
{
    public class CommentsViewComponent : KaizinViewComponent
    {
        private readonly CommentService _commentService;

        public CommentsViewComponent(
            ILogger<CommentsViewComponent> logger,
            CommentService commentService) : base(logger)
        {
            _commentService = commentService;
        }

        public async Task<IViewComponentResult> InvokeAsync(Guid postId)
        {
            var comments = await _commentService.GetSelectedOfPostAsync(postId);

            Logger.LogInformation("Get comments " + comments?.Count);

            return View(comments);
        }
    }
}