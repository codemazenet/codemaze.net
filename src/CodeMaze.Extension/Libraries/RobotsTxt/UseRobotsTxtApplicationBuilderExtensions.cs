﻿using Microsoft.AspNetCore.Builder;
using System;

namespace CodeMaze.Extension.RobotsTxt
{
    public static class UseRobotsTxtApplicationBuilderExtensions
    {
        public static void UseRobotsTxt(this IApplicationBuilder app, Func<RobotsTxtOptionsBuilder, RobotsTxtOptionsBuilder> builderFunc)
        {
            var builder = new RobotsTxtOptionsBuilder();
            var options = builderFunc(builder).Build();
            app.UseRobotsTxt(options);
        }

        public static IApplicationBuilder UseRobotsTxt(this IApplicationBuilder app)
        {
            return app.UseMiddleware<RobotsTxtConfiguration>();
        }

        public static void UseRobotsTxt(this IApplicationBuilder app, RobotsTxtOptions options)
        {
            app.UseMiddleware<RobotsTxtConfiguration>(options);
        }
    }
}