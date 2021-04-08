namespace CodeMaze.WebApp.Extensions
{
    using Microsoft.Extensions.DependencyInjection;

    public static class RegisterAntiforgery
    {
        public static IServiceCollection AddAntiforgeryService(this IServiceCollection services, string cookieBaseName)
        {
            return services.AddAntiforgery(options =>
            {
                options.Cookie.Name = $"X-{cookieBaseName}";
                options.FormFieldName = $"{cookieBaseName}-FORM";
            });
        }
    }
}