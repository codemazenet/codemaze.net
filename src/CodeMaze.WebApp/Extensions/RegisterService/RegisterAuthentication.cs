using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using CodeMaze.Configuration;
using System;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.AspNetCore.CookiePolicy;
using CodeMaze.WebApp.Extensions;

namespace CodeMaze.WebApp
{
    public static class RegisterAuthentication
    {
        public static void AddAuthenticationExtend(this IServiceCollection services, string authToken)
        {
            services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme).AddCookie(options =>
            {
                options.Cookie.Name = "MazeCore.AuthToken";
                options.LoginPath = "/auth/login.html";
                options.LogoutPath = "/auth/logout.html";
                options.ExpireTimeSpan = TimeSpan.FromDays(CodeMazeConfiguration.AppSettings.CookiesTimeOut);
                options.SlidingExpiration = true;
                options.Cookie.HttpOnly = true;
                options.Cookie.SecurePolicy = CookieSecurePolicy.Always;
                //options.EventsType = typeof(RevokeAuthenticationEvents);
            });


            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.Strict;
                options.HttpOnly = HttpOnlyPolicy.Always;
                options.Secure = CookieSecurePolicy.Always;
            });

            services.AddSession(options =>
            {
                options.Cookie.Name = CookieAuthenticationDefaults.AuthenticationScheme;
                // Set a short timeout for easy testing.
                options.IdleTimeout = TimeSpan.FromSeconds(CodeMazeConfiguration.AppSettings.SessionTimeOut);
                options.Cookie.HttpOnly = true;
                // Make the session cookie essential
                options.Cookie.IsEssential = true;
                options.Cookie.SecurePolicy = CookieSecurePolicy.Always;
                options.Cookie.SameSite = SameSiteMode.Lax;
            });

            
            services.AddDistributedMemoryCache();

            services.AddMvc(options => options.Filters.Add(new AuthorizeFilter())); 
        }
    }
}