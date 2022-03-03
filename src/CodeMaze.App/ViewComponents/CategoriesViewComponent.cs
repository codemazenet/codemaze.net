using CodeMaze.IServices;

using Microsoft.AspNetCore.Mvc;

namespace CodeMaze.App.ViewComponents
{
    public class CategoriesViewComponent : BaseViewComponent
    {
        private readonly ICategoryService categoryService;

        public CategoriesViewComponent(
            ILogger<BaseViewComponent> logger,
            ICategoryService categoryService)
            : base(logger)
        {
            this.categoryService = categoryService;
        }

        public async Task<IViewComponentResult> InvokeAsync(string view)
        {
            var response = await categoryService.GetCategoriesPublishAsync();

            return View(view, response);
        }
    }
}
