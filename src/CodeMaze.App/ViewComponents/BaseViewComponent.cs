using Microsoft.AspNetCore.Mvc;

namespace CodeMaze.App.ViewComponents
{
    public abstract class BaseViewComponent : ViewComponent
    {
        protected readonly ILogger<BaseViewComponent> Logger;

        protected BaseViewComponent(ILogger<BaseViewComponent> logger)
        {
            Logger = logger;
        }
    }
}
