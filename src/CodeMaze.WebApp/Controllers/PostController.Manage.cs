using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using CodeMaze.Configuration;
using CodeMaze.Data.ViewModels;
using System;
using System.Linq;
using System.Threading.Tasks;
using X.PagedList;

namespace CodeMaze.WebApp.Controllers
{
    public partial class PostController
    {
        [HttpGet]
        [Authorize]
        [Route("/post/manage/{page?}")]
        public async Task<IActionResult> ManageAsync(int page = 1, [FromServices] IMemoryCache memoryCache = null)
        {
            ViewData["Component"] = "post/manage";
            var postList = await repositoryFactory.Post.GetAllPostAsync(page, CodeMazeConfiguration.PageSize);

            int postCount = memoryCache.GetOrCreate(StaticCacheKeys.ManagePostCount, entry => repositoryFactory.Post.CountManagePosts());

            var postsAsIPagedList = new StaticPagedList<PostManageViewModel>(postList.Item, page, CodeMazeConfiguration.PageSize, postCount);

            return View("Manage", postsAsIPagedList);
        }

        #region Create Post

        [HttpGet]
        [Authorize]
        [Route("/post/manage/create")]
        public async Task<IActionResult> CreateAsync()
        {
            ViewData["Component"] = "post/manage/create";
            ViewData["update"] = false;

            var categories = await repositoryFactory.Category.GetAllAsync();

            var checkboxList = categories?.Select(p =>
                new CheckBoxViewModel(
                    p.DisplayName,
                    p.Id.ToString(),
                    false)).ToList();

            var editViewModel = new PostEditViewModel
            {
                CategoryList = await repositoryFactory.Category.GetCheckboxListAsync()
            };

            return View("Update", editViewModel);
        }

        [HttpPost]
        [Authorize]
        [ValidateAntiForgeryToken]
        [Route("/post/manage/create")]
        public async Task<IActionResult> CreateAsync([FromForm] PostEditViewModel model)
        {
            var postRequest = commonFactory.Mapper.Map<CreatePostRequest>(model);
            var response = repositoryFactory.Post.Add(postRequest);

            if (response.IsSuccess)
                return Redirect("/post/manage");

            ViewData["Component"] = "post/manage/create";
            ViewData["error"] = response.Message;
            ViewData["update"] = false;

            model.CategoryList = await repositoryFactory.Category.GetCheckboxListAsync(model.CategoryIds);

            return View("Update", model);
        }

        #endregion Create Post

        #region Update Post

        [HttpGet]
        [Authorize]
        [Route("/post/manage/update/{id}")]
        public async Task<IActionResult> UpdateAsync(Guid id)
        {
            ViewData["Component"] = "post";
            ViewData["update"] = true;
            var postResponse = await repositoryFactory.Post.GetPostUpdateAsync(id);
            if (!postResponse.IsSuccess)
                return View("Error");

            var post = postResponse.Item;
            if (null != post)
            {
                var editViewModel = commonFactory.Mapper.Map<PostEditViewModel>(post);

                editViewModel.CategoryList = await repositoryFactory.Category.GetCheckboxListAsync(post.CategoryIds);

                return View("Update", editViewModel);
            }

            return Redirect("/post/manage");
        }

        [HttpPost]
        [Authorize]
        [ValidateAntiForgeryToken]
        [Route("/post/manage/update/{id}")]
        public async Task<IActionResult> UpdateAsync(Guid id, [FromForm] PostEditViewModel model)
        {
            ViewData["Component"] = "post";

            if (ModelState.IsValid)
            {
                try
                {
                    var postRequest = commonFactory.Mapper.Map<PostEditViewModel, UpdatePostRequest>(model);
                    var response = repositoryFactory.Post.Update(postRequest);
                    if (response.IsSuccess)
                    {
                        return Redirect("/post/manage");
                    }
                    ViewData["error"] = response.Message;
                }
                catch (Exception ex)
                {
                    throw;
                }
            }

            ViewData["update"] = true;

            model.CategoryList = await repositoryFactory.Category.GetCheckboxListAsync(model.CategoryIds);

            return View("Update", model);
        }

        #endregion Update Post

        #region Delete post

        [HttpPost]
        [Authorize]
        [ValidateAntiForgeryToken]
        [Route("/post/manage/delete")]
        public IActionResult Delete(PostRequestDeleteViewModel reuqest)
        {
            ViewData["Component"] = "post";

            var response = repositoryFactory.Post.Delete(reuqest.Id, false);

            return Ok(response);
        }

        #endregion Delete post
    }
}