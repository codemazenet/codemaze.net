using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;
using CodeMaze.Data.Systems;
using System;
using System.IO;

namespace CodeMaze.WebApp.Filters
{
    public class DeleteSubscriptionCacheFilter : ActionFilterAttribute
    {
        protected readonly ILogger<DeleteSubscriptionCacheFilter> Logger;

        public DeleteSubscriptionCacheFilter(ILogger<DeleteSubscriptionCacheFilter> logger)
        {
            Logger = logger;
        }

        public override void OnActionExecuted(ActionExecutedContext context)
        {
            base.OnActionExecuted(context);
            DeleteSubscriptionFiles();
        }

        private void DeleteSubscriptionFiles()
        {
            try
            {
                var path = $@"{AppDomain.CurrentDomain.GetData(Constants.DataDirectory)}\feed\";
                var files = Directory.GetFiles(path);
                foreach (var file in files)
                {
                    File.Delete(file);
                }
            }
            catch (Exception e)
            {
                Logger.LogError(e, "Error Delete Subscription Files");
            }
        }
    }
}