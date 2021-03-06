using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using System.IO;
using System.Threading.Tasks;

namespace CodeMaze.Extension.RobotsTxt
{
    public class RobotsTxtConfiguration
    {
        private static readonly PathString RobotsTxtPath = new PathString("/robots.txt");
        private readonly RobotsTxtOptions _options;
        private readonly RequestDelegate _next;

        public RobotsTxtConfiguration(RequestDelegate next, RobotsTxtOptions options = null, IOptions<RobotsTxtOptions> ioptions = null)
        {
            _next = next;
            if (null != options)
            {
                _options = options;
            }
            else if (null != ioptions)
            {
                _options = ioptions.Value;
            }
        }

        public async Task Invoke(HttpContext context)
        {
            if (context.Request.Path == RobotsTxtPath)
            {
                context.Response.ContentType = "text/plain";
                context.Response.Headers.Add("Cache-Control", $"max-age={_options.MaxAge.TotalSeconds}");

                await BuildRobotsTxt(context);
                return;
            }

            await _next.Invoke(context);
        }

        private async Task BuildRobotsTxt(HttpContext context)
        {
            var sb = _options.Build();

            var output = sb.ToString()?.TrimEnd();

            if (string.IsNullOrWhiteSpace(output))
                output = "# This file didn't get any instructions so everyone is allowed";

            using (var sw = new StreamWriter(context.Response.Body))
                await sw.WriteAsync(output);
        }
    }
}