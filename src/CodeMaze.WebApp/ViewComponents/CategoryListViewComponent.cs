using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using CodeMaze.Configuration;
using CodeMaze.Data.Systems;
using CodeMaze.Service;
using System.Threading.Tasks;

namespace CodeMaze.WebApp.ViewComponents
{
    public class CategoryListViewComponent : KaizinViewComponent
    {
        private readonly CategoryService _categoryService;

        private readonly IBlogConfig _blogConfig;

        public CategoryListViewComponent(
            ILogger<CategoryListViewComponent> logger,
            IOptions<AppSettings> settings,
            CategoryService categoryService,
            IBlogConfig blogConfig) : base(logger, settings)
        {
            _categoryService = categoryService;
            _blogConfig = blogConfig;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            var response = await _categoryService.GetAllActiveAsync();

            return View(response);
        }
    }
}