using CodeMaze.App.Models;

using Microsoft.AspNetCore.Mvc;

using System.Diagnostics;

namespace CodeMaze.App.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        [Route("/"), Route("/index.html")]
        public IActionResult Index()
        {
            return View();
        }

        [Route("/archive.html")]
        public IActionResult Archive()
        {
            return View();
        }

        [Route("/contact.html")]
        public IActionResult Contact()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}