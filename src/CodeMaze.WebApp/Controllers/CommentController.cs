using CodeMaze.Data.RequestResponse;
using CodeMaze.Extension;
using CodeMaze.Service.Factory;
using CodeMaze.ViewModels;
using CodeMaze.WebApp.Extensions;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using System.Net;
using System.Threading.Tasks;

namespace CodeMaze.WebApp.Controllers
{
    public class CommentController : BaseController
    {
        public CommentController(
            RepositoryFactory repositoryFactory,
            CommonFactory commonFactory)
            : base(repositoryFactory, commonFactory)
        { }

        [HttpPost]
        [ValidateActionPost]
        [Route("/api/comment/add")]
        public async Task<Response> AddAsync([FromBody] CommentEditViewModel comment)
        {
            if (comment is null)
                return new FailedResponse((int)HttpStatusCode.Created);

            if (string.IsNullOrWhiteSpace(comment.Author))
                return new FailedResponse((int)HttpStatusCode.BadRequest, "Please enter your name");

            if (string.IsNullOrWhiteSpace(comment.Email))
                return new FailedResponse((int)HttpStatusCode.BadRequest, "Please enter your email");

            if (string.IsNullOrWhiteSpace(comment.Comment))
                return new FailedResponse((int)HttpStatusCode.BadRequest, "Please enter your comment");

            if (!comment.Email.IsValidEmail())
                return new FailedResponse((int)HttpStatusCode.BadRequest, "Please enter a valid email address");

            var commentRequest = commonFactory.Mapper.Map<CommentRequest>(comment);
            commentRequest.IpAddress = commonFactory.HttpContextAccessor.HttpContext.Connection.RemoteIpAddress.ToString();

            var userClaim = HttpContext.Session.Get<UserClaim>(SessionHelper.SessionLogin);
            if (userClaim != null)
                commentRequest.UserAgent = userClaim.UserName;

            await repositoryFactory.Comment.AddAsync(commentRequest).ConfigureAwait(false);

            return new SuccessResponse();

        }
    }
}