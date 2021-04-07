using Microsoft.AspNetCore.Http;
using CodeMaze.Configuration;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using CodeMaze.Data.Systems;
using Microsoft.Extensions.Configuration;

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
            var appReady = configuration.GetValue<bool>("AppReady");

            if(appReady == false)
            {
                return httpContext.Response.WriteAsync("Welcome to Code Maze, App isn't ready!");
            }

            httpContext.Response.Headers["MAZE-Powered-By"] = CodeMazeConfiguration.AppSettings.PoweredBy;
            httpContext.Response.Headers["MAZE-Author-By"] = CodeMazeConfiguration.AppSettings.AuthorBy;
            return _next.Invoke(httpContext);
        }
    }
}