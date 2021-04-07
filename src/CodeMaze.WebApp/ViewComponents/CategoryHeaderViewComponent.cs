using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using CodeMaze.Configuration;
using CodeMaze.Data.Systems;
using CodeMaze.Data.ViewModels;
using CodeMaze.Service;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CodeMaze.WebApp.ViewComponents
{
    public class CategoryHeaderViewComponent : KaizinViewComponent
    {
        private readonly CategoryService _categoryService;

        private readonly IBlogConfig _blogConfig;

        public CategoryHeaderViewComponent(
            ILogger<CategoryHeaderViewComponent> logger,
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

            if (response != null)
            {
                return View(response);
            }

            return View(new List<CategoryItemViewModel>());
        }
    }
}