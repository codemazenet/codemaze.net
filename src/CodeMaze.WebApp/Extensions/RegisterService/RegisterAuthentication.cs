using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using CodeMaze.Configuration;
using System;

namespace CodeMaze.WebApp
{
    public static class RegisterAuthentication
    {
        public static void AddAuthenticationExtend(this IServiceCollection services)
        {
            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });

            //services.AddDbContext<KyzinDbContext>(options =>
            //    options.UseSqlServer(CodeMazeConfiguration.DbConnention, sqlOptions =>
            //    {
            //        sqlOptions.EnableRetryOnFailure(
            //            maxRetryCount: 3,
            //            maxRetryDelay: TimeSpan.FromSeconds(30),
            //            errorNumbersToAdd: null);
            //    }));

            //services.AddDefaultIdentity<IdentityUser>()
            //    .AddDefaultUI(UIFramework.Bootstrap4)
            //    .AddEntityFrameworkStores<KizinDbConext>();

            services.AddDistributedMemoryCache();

            services.AddSession(options =>
            {
                options.Cookie.Name = CookieAuthenticationDefaults.AuthenticationScheme;
                // Set a short timeout for easy testing.
                options.IdleTimeout = TimeSpan.FromSeconds(CodeMazeConfiguration.AppSettings.SessionTimeOut);
                options.Cookie.HttpOnly = true;
                // Make the session cookie essential
                options.Cookie.IsEssential = true;
            });

            services.AddAuthentication(options =>
            {
                options.DefaultSignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                options.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = CookieAuthenticationDefaults.AuthenticationScheme;
            }).AddCookie(options =>
            {
                options.LoginPath = "/login.html";
                options.ExpireTimeSpan = TimeSpan.FromSeconds(CodeMazeConfiguration.AppSettings.CookiesTimeOut);
                options.SlidingExpiration = true;
            });
        }
    }
}