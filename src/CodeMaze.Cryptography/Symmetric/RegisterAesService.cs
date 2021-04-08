using Microsoft.Extensions.DependencyInjection;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeMaze.Cryptography.Symmetric
{
    public static class RegisterAesService
    {
        public static IServiceCollection AddAesService(this IServiceCollection services, string cipherKey)
        {
            if (!string.IsNullOrWhiteSpace(cipherKey))
            {
                services.AddSingleton<IAesEncryptor>(sec => new AesEncryptor(cipherKey));
            }
            return services;
        }
    }
}
