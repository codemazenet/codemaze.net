using Microsoft.AspNetCore.Mvc;

namespace CodeMaze.App.ViewComponents
{
    public abstract class BaseViewComponent : ViewComponent
    {
        protected readonly ILogger<BaseViewComponent> Logger = null;

        protected BaseViewComponent(ILogger<BaseViewComponent> logger)
        {
            if (null != logger) Logger = logger;
        }
    }
}
