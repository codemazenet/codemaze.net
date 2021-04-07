using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using System.Linq;
using System.Text;

namespace CodeMaze.Extension
{
    public static class SessionHelper
    {
        public const string SessionLogin = "SessionLogin";

        /// <summary>
        /// Save target object to session
        /// </summary>
        /// <param name="key"></param>
        /// <param name="value"></param>
        public static void Set<T>(this ISession session, string key, T value)
        {
            //session.SetString(key, value);
            var input = JsonConvert.SerializeObject(value);
            session.Set(key, Encoding.Unicode.GetBytes(input));
        }

        /// <summary>
        /// Remove value in session
        /// </summary>
        /// <param name="key"></param>
        public static void Remove(this ISession session, string key)
        {
            if (!string.IsNullOrEmpty(key))
            {
                session.Remove(key);
            }
        }

        /// <summary>
        /// Get value from session
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        public static T Get<T>(this ISession session, string key)
        {
            if (session.TryGetValue(key, out var value))
            {
                var converted = Encoding.Unicode.GetString(value, 0, value.Length);

                return JsonConvert.DeserializeObject<T>(converted);
            }

            return default(T);
        }

        /// <summary>
        /// Get value from session
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        public static bool HasValue(this ISession session, string key)
        {
            return session.Keys.Any(p => p == key);
        }
    }
}