using Microsoft.AspNetCore.Http;
using CodeMaze.Configuration;
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
            if (httpContext.Response.Headers.ContainsKey("X-Powered-By"))
            {
                httpContext.Response.Headers.Remove("X-Powered-By");
            }

            httpContext.Response.Headers["X-Powered-By"] = CodeMazeConfiguration.AppSettings.PoweredBy;
            httpContext.Response.Headers["X-Author-By"] = CodeMazeConfiguration.AppSettings.AuthorBy;
            return _next.Invoke(httpContext);
        }
    }
}