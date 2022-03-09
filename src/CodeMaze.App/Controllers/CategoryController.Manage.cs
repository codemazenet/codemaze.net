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
    }
}
