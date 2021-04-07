using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using CodeMaze.Data.Systems;

namespace CodeMaze.WebApp.ViewComponents
{
    public abstract class KaizinViewComponent : ViewComponent
    {
        protected readonly ILogger<KaizinViewComponent> Logger;
        protected AppSettings AppSettings { get; set; }

        protected KaizinViewComponent(ILogger<KaizinViewComponent> logger = null, IOptions<AppSettings> settings = null)
        {
            if (null != logger) Logger = logger;

            if (null != settings) AppSettings = settings.Value;
        }
    }
}