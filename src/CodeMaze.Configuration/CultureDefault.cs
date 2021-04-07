using Microsoft.Extensions.DependencyInjection;

namespace CodeMaze.Configuration
{
    public static class CultureDefault
    {
        /// <summary>
        /// get more info culture at: https://docs.microsoft.com/en-us/dotnet/api/system.globalization.cultureinfo
        /// </summary>
        /// <param name="services"></param>
        /// <param name="cultureInfo"></param>
        public static void CultureConfigure(this IServiceCollection services, string cultureInfo)
        {
            if (string.IsNullOrEmpty(cultureInfo))
            {
                cultureInfo = "en-US"; // default English (United States)
            }
            System.Globalization.CultureInfo ci = new System.Globalization.CultureInfo(cultureInfo);
            System.Globalization.CultureInfo.CurrentCulture = ci;
            System.Globalization.CultureInfo.DefaultThreadCurrentCulture = ci;
            System.Threading.Thread.CurrentThread.CurrentCulture = ci;
        }
    }
}