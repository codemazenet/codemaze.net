using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using CodeMaze.Configuration;
using CodeMaze.Data.ViewModels;
using CodeMaze.Service.Factory;
using CodeMaze.WebApp.Extensions;
using CodeMaze.WebApp.ViewModels;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace CodeMaze.WebApp.Controllers
{
    public partial class PostController : BaseController
    {
        public PostController(
            RepositoryFactory repositoryFactory,
            CommonFactory commonFactory)
            : base(repositoryFactory, commonFactory)
        { }

        [Route("/post/{url}-{code}.html")]
        [ResponseCache(CacheProfileName ="Cache30")]
        public async Task<IActionResult> Detail(string url, string code, [FromServices] IMemoryCache memoryCache = null)
        {
            var postView = new PostViewViewModel(commonFactory.BlogConfig, commonFactory.HttpContextAccessor, commonFactory.AesEncryption);

            if (string.IsNullOrEmpty(url) || string.IsNullOrEmpty(code))
                return View("NotFound", postView);

            var postInfo = await memoryCache.TryCreateOrGetAsync($"{StaticCacheKeys.PostDetail}-{url}-{code}", () => repositoryFactory.Post.GetPostAsync(url, code), TimeSpan.FromMinutes(5));

            if (!postInfo.IsSuccess)
            {
                return View("NotFound", postView);
            }

            var userInfo = await memoryCache.GetOrCreateAsync($"UserId_{postInfo.Item.UserId}", entry => repositoryFactory.User.GetById(postInfo.Item.UserId));

            var relatedPosts = await repositoryFactory.Post.GetRelatedPostsAsync(postInfo.Item.Categories.ToList(), CodeMazeConfiguration.RelatedPostSize);

            await ViewCount(postInfo.Item.Id).ConfigureAwait(true);

            postView.Item = postInfo.Item;
            postView.RelatedPosts = relatedPosts.Item;
            postView.Author = userInfo;
            postView.Token = commonFactory.AesEncryption.Encrypt($"{url}-{code}");

            return View(postView);
        }

        private async Task ViewCount(Guid postId)
        {
            if (HasCookie(CookieNames.View, postId.ToString()))
            {
                return;
            }

            var response = await repositoryFactory.Post.UpdatePostStatisticAsync(postId, StatisticTypes.Views);
            if (response.IsSuccess)
            {
                SetPostTrackingCookie(CookieNames.View, postId.ToString());
            }
        }

        [HttpPost]
        [ValidateActionPost]
        public async Task<IActionResult> Hit([FromForm] Guid postId)
        {
            if (HasCookie(CookieNames.Hit, postId.ToString()))
            {
                return new EmptyResult();
            }

            var response = await repositoryFactory.Post.UpdatePostStatisticAsync(postId, StatisticTypes.Hits);
            if (response.IsSuccess)
            {
                SetPostTrackingCookie(CookieNames.Hit, postId.ToString());
            }

            return Json(response);
        }

        [HttpPost]
        [ValidateActionPost]
        public async Task<IActionResult> Like([FromForm] Guid postId)
        {
            if (HasCookie(CookieNames.Liked, postId.ToString()))
            {
                return Json(new
                {
                    IsSuccess = false,
                    Message = "You Have Rated"
                });
            }

            var response = await repositoryFactory.Post.UpdatePostStatisticAsync(postId, StatisticTypes.Likes);
            if (response.IsSuccess)
            {
                SetPostTrackingCookie(CookieNames.Liked, postId.ToString());
            }

            return Json(response);
        }

        #region Helper Methods

        private bool HasCookie(CookieNames cookieName, string id)
        {
            var viewCookie = HttpContext.Request.Cookies[cookieName.ToString()];
            if (viewCookie != null)
            {
                return viewCookie == id;
            }
            return false;
        }

        private void SetPostTrackingCookie(CookieNames cookieName, string id)
        {
            var options = new CookieOptions
            {
                Expires = DateTime.UtcNow.AddDays(1),
                SameSite = SameSiteMode.Strict,
                Secure = Request.IsHttps,

                // Mark as essential to pass GDPR
                // https://docs.microsoft.com/en-us/aspnet/core/security/gdpr?view=aspnetcore-3.1
                IsEssential = true
            };

            Response.Cookies.Append(cookieName.ToString(), id, options);
        }

        #endregion Helper Methods
    }
}