using Microsoft.Extensions.DependencyInjection;
using CodeMaze.Configuration;
using CodeMaze.Service;
using System.Linq;
using System.Reflection;
using CodeMaze.Service.Factory;

namespace CodeMaze.WebApp
{
    public static class Repository
    {
        public static IServiceCollection AddRepositoryService(this IServiceCollection services)
        {
            services.AddScoped(typeof(IRepository<>), typeof(DbContextRepository<>));
            services.AddSingleton<IBlogConfig, BlogConfig>();

            services.AddScoped(typeof(IRepository<>), typeof(DbContextRepository<>));

            var asm = Assembly.GetAssembly(typeof(BaseService));
            if (null != asm)
            {
                var types = asm.GetTypes().Where(t => t.IsClass && t.IsPublic && t.Namespace.EndsWith("Service") && t.Name.EndsWith("Service"));
                foreach (var t in types)
                {
                    services.AddTransient(t, t);
                }
            }

            services.AddTransient(typeof(RepositoryFactory));
            services.AddTransient(typeof(CommonFactory));

            return services;
        }
    }
}