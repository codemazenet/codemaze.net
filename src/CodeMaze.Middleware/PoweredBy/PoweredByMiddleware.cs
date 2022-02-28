using CodeMaze.Configuration;

using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;

using System.Threading.Tasks;

namespace CodeMaze.Middleware
{
    public class PoweredByMiddleware
    {
        private readonly RequestDelegate _next;

        public PoweredByMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public Task Invoke(HttpContext httpContext)
        {
            var configuration = httpContext.RequestServices.GetService(typeof(IConfiguration)) as IConfiguration;
            var appReady = bool.Parse(configuration["AppReady"]);

            if (appReady == false)
            {
                return httpContext.Response.WriteAsync("Welcome to Code Maze, App isn't ready!");
            }

            httpContext.Response.Headers["MAZE-Powered-By"] = CodeMazeConfiguration.AppSettings.PoweredBy;
            httpContext.Response.Headers["MAZE-Author-By"] = CodeMazeConfiguration.AppSettings.AuthorBy;
            return _next.Invoke(httpContext);
        }
    }
}