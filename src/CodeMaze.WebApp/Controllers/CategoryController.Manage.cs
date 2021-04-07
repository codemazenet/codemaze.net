using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using CodeMaze.Data.RequestResponse;
using CodeMaze.Data.ViewModels;
using System;
using System.Threading.Tasks;

namespace CodeMaze.WebApp.Controllers
{
    public partial class CategoryController
    {
        #region List categories

        [HttpGet]
        [Authorize]
        [Route("/Category/Manage")]
        public async Task<IActionResult> ManageAsync()
        {
            ViewData["Component"] = "category/manage";
            var response = await repositoryFactory.Category.GetAllAsync();
            return View("Manage", response);
        }

        #endregion List categories

        #region Create catgory

        [HttpGet]
        [Authorize]
        [Route("/category/manage/create")]
        public IActionResult CreateAsync()
        {
            ViewData["Component"] = "category/manage/create";
            ViewData["update"] = false;
            return View("Update", new CategoryEditViewModel());
        }

        [HttpPost]
        [Authorize]
        [ValidateAntiForgeryToken]
        [Route("/category/manage/create")]
        public IActionResult CreateAsync([FromForm] CategoryEditViewModel model)
        {
            ViewData["Component"] = "category/manage/create";
            var response = repositoryFactory.Category.CreateCategory(model);

            if (!response.IsSuccess)
            {
                ViewData["error"] = response.Message;
                ViewData["update"] = false;
                return View("Update", model);
            }

            return Redirect("/category/manage");
        }

        #endregion Create catgory

        #region Update category

        [HttpGet]
        [Authorize]
        [Route("/category/manage/update/{id}")]
        public async Task<IActionResult> UpdateAsync(Guid id)
        {
            ViewData["Component"] = "category";

            var model = await repositoryFactory.Category.GetByIdAsync(id);

            if (model != null)
            {
                ViewData["update"] = true;

                var category = commonFactory.Mapper.Map<CategoryEditViewModel>(model);

                return View("Update", category);
            }

            return Redirect("/category/manage");
        }

        [HttpPost]
        [Authorize]
        [ValidateAntiForgeryToken]
        [Route("/category/manage/update/{id}")]
        public IActionResult UpdateAsync(Guid id, [FromForm] CategoryEditViewModel model)
        {
            ViewData["Component"] = "category";

            var response = repositoryFactory.Category.UpdateCategory(model);

            if (!response.IsSuccess)
            {
                ViewData["error"] = response.Message;
                ViewData["update"] = true;
                return View("Update", model);
            }

            return Redirect("/category/manage");
        }

        #endregion Update category

        #region Delete

        [HttpGet]
        [Authorize]
        [Route("/category/manage/trash/{categoryUrl}-{categoryCode}")]
        public async Task<IActionResult> TrashAsync(string categoryUrl, string categoryCode)
        {
            var response = await repositoryFactory.Category.TrashAsync(categoryUrl, categoryCode);

            if (response)
            {
                ViewData["Response"] = new SuccessResponse("Move category to Recycle Bin success");
            }

            return Redirect("/category/manage");
        }

        #endregion Delete
    }
}