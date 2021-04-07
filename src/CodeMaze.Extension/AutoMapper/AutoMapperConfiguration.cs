using AutoMapper;
using Microsoft.Extensions.DependencyInjection;

namespace CodeMaze.Extension
{
    public static class AutoMapperConfiguration
    {
        public static void AutoMapperConfigure(this IServiceCollection services)
        {
            services.AddAutoMapper(typeof(ModelToViewModelProfile));
            services.AddAutoMapper(typeof(ViewModelToModelProfile));
            services.AddAutoMapper(typeof(ViewModelToViewModelProfile));
        }
    }
}