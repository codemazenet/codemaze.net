using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodeMaze.WebApp.Extensions
{
    public static class RegisterMvcCache
    {
        public static IServiceCollection AddMvcCacheService(this IServiceCollection services)
        {
            services.AddMvc(option =>
            {
                option.EnableEndpointRouting = false;
                option.CacheProfiles.Add("Cache30", new CacheProfile
                {
                    Duration = 30,
                    VaryByHeader = "User-Agent",
                    Location = ResponseCacheLocation.Client
                });
            }).SetCompatibilityVersion(CompatibilityVersion.Latest)
                 .AddNewtonsoftJson(opt =>
                 {
                     opt.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                     opt.SerializerSettings.ContractResolver = new DefaultContractResolver();
                 }).AddNewtonsoftJson();

            return services;
        }
    }
}
