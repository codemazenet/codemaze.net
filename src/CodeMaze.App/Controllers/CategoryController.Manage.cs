using Microsoft.AspNetCore.Mvc;

namespace CodeMaze.App.Controllers
{
    public partial class CategoryController
    {
        [Route("/manage/category")]
        [HttpGet]
        public IActionResult Manage()
        {

            return View("ManageView");
        }
    }
}
