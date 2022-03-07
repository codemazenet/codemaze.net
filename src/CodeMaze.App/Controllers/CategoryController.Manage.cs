using Microsoft.AspNetCore.Mvc;

namespace CodeMaze.App.Controllers
{
    public partial class CategoryController
    {
        [Route("/manage/category/{view?}")]
        [HttpGet]
        public IActionResult Manage(string view = "")
        {

            return View("ManageView");
        }
    }
}
