using CodeMaze.Results;
using CodeMaze.ViewModels;

using Microsoft.AspNetCore.Mvc;

using System.Net;

namespace CodeMaze.App.Controllers
{
    public partial class CategoryController
    {
        [Route("/manage/category/{view?}")]
        [HttpGet]
        public async Task<IActionResult> ManageView(string view = "")
        {
            if (!view.Equals("ontab", StringComparison.CurrentCultureIgnoreCase) &&
               !view.Equals("trash", StringComparison.CurrentCultureIgnoreCase))
                view = String.Empty;

            var categories = await repository.Category.GetCategoriesByStatusAsync(view.Trim().ToLower());

            return View("ManageView", categories);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        [Route("/api/manage/category")]
        public async Task<IActionResult> ManageAdd([FromForm] CategoryRequest category)
        {
            if (category is null)
                return Ok(Result.Fail("Could not create this category", (int)HttpStatusCode.Created));

            if (category is not null && string.IsNullOrWhiteSpace(category.Title))
                return Ok(Result.Fail($"The title is required!",
                    (int)HttpStatusCode.Created));

            var result = await repository.Category.ExecuteAddAsync(category);

            return Ok(result);
        }

        [HttpPut]
        [ValidateAntiForgeryToken]
        [Route("/api/manage/category")]
        public async Task<IActionResult> ManageUpdate(
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

        [HttpDelete]
        [ValidateAntiForgeryToken]
        [Route("/api/manage/category")]
        public async Task<IActionResult> ManageDelete([FromForm] string categoryId, [FromForm] bool isDelete)
        {
            if (string.IsNullOrWhiteSpace(categoryId))
                return BadRequest(Result.Fail("Something went wrong. Try again."));

            if (Guid.TryParse(categoryId, out var _id))
            {
                IResult<bool> result;

                if (isDelete)
                    result = await repository.Category.ExecuteDeleteAsync(_id);
                else
                    result = await repository.Category.ExecuteTrashAsync(_id);

                return Ok(result);
            }

            return BadRequest(Result.Fail((int)HttpStatusCode.BadRequest));
        }
    }
}
