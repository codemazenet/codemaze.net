using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using CodeMaze.Configuration;
using CodeMaze.Library;

namespace CodeMaze.WebApp
{
    public static class RegisterExtension
    {
        public static IServiceCollection AddExtensionService(this IServiceCollection services)
        {
            services.AddHttpContextAccessor();
            services.TryAddSingleton<IActionContextAccessor, ActionContextAccessor>();
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            //services.AddScoped<DeleteSubscriptionCacheFilter>();
            //services.AddTransient<ISessionBasedCaptcha, BasicLetterCaptcha>();
            //services.AddTransient<IKaizinNotification, EmailNotification>();
            //services.AddTransient<IPingbackSender, PingbackSender>();
            //services.AddTransient<IPingbackReceiver, PingbackReceiver>();
            services.AddTransient<IFileSystemOpmlWriter, FileSystemOpmlWriter>();
            services.AddTransient<IAesEncryptionService>(enc => new AesEncryptionService(new KeyInfo(CodeMazeConfiguration.Encryption)));

            return services;
        }
    }
}