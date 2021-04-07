using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using CodeMaze.Configuration;
using CodeMaze.Data.Systems;
using CodeMaze.Service;
using System.Threading.Tasks;

namespace CodeMaze.WebApp.ViewComponents
{
    public class HotTagsViewComponent : KaizinViewComponent
    {
        private readonly TagService _tagService;

        private readonly IBlogConfig _blogConfig;

        public HotTagsViewComponent(
            ILogger<HotTagsViewComponent> logger,
            IOptions<AppSettings> settings,
            TagService tagService,
            IBlogConfig blogConfig) : base(logger, settings)
        {
            _tagService = tagService;
            _blogConfig = blogConfig;
        }

        public async Task<IViewComponentResult> InvokeAsync()
        {
            var response = await _tagService.GetHotTagsAsync(_blogConfig.ContentSettings.HotTagAmount);

            return View(response);
        }
    }
}