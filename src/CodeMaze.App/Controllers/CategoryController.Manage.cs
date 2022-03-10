using CodeMaze.Results;
using CodeMaze.ViewModels;

using Microsoft.AspNetCore.Mvc;

namespace CodeMaze.App.Controllers
{
    public partial class CategoryController
    {
        [Route("/manage/category/{view?}")]
        [HttpGet]
        public async Task<IActionResult> Manage(string view = "")
        {
            if (!view.Equals("ontab", StringComparison.CurrentCultureIgnoreCase) &&
               !view.Equals("trash", StringComparison.CurrentCultureIgnoreCase))
                view = String.Empty;

            var categories = await repository.Category.GetCategoriesByStatusAsync(view.Trim().ToLower());

            return View("ManageView", categories);
        }

        [Route("/api/manage/category")]
        [HttpPost]
        public async Task<IActionResult> Manage([FromForm] CategoryViewModel category)
        {

            return Ok("ok");
        }

        [Route("/api/manage/category")]
        [HttpPut]
        public async Task<IActionResult> Manage(
            [FromQuery(Name = "id")] Guid categoryId,
            [FromForm] CategoryRequest category)
        {
            if (category == null)
                return BadRequest(Result.Fail("Something went wrong. Try again."));

            if (string.IsNullOrWhiteSpace(category.Title))
                return BadRequest(Result.Fail("Title is required, please enter title and try again."));

            var result = await repository.Category.ExecuteUpdateAsync(categoryId, category);
            return Ok(result);
        }


    }
}
