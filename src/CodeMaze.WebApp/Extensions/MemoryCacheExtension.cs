using Microsoft.Extensions.Caching.Memory;
using System;
using System.Threading.Tasks;

namespace CodeMaze.WebApp.Extensions
{
    public static class MemoryCacheExtension
    {
        public static async Task<T> TryCreateOrGetAsync<T>(this IMemoryCache memoryCache, string key, Func<Task<T>> func, TimeSpan timeExpire)
        {
            var result = default(T);
            if (memoryCache.TryGetValue(key, out result) && result != null)
            {
                return result;
            }
            else
            {
                var data = await func();

                memoryCache.Set(key, data, timeExpire);

                return data;
            }
        }

        public static T TryCreateOrGet<T>(this IMemoryCache memoryCache, string key, Func<T> func, TimeSpan timeExpire)
        {
            var result = default(T);
            if (memoryCache.TryGetValue(key, out result) && result != null)
            {
                return result;
            }
            else
            {
                var data = func();

                memoryCache.Set(key, data, timeExpire);

                return data;
            }
        }
    }
}