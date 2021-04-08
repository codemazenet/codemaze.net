using CodeMaze.Caching;
using CodeMaze.Configuration;
using CodeMaze.Cryptography;
using CodeMaze.Cryptography.Symmetric;
using CodeMaze.Data;
using CodeMaze.Extension;
using CodeMaze.Middleware;
using CodeMaze.WebApp.Extensions;

using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;

using WebMarkupMin.AspNetCore3;

namespace CodeMaze.WebApp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
            AppSettingsSection = configuration.GetSection(nameof(CodeMaze.Data.Systems.AppSettings));
            connectionString = GetValueConfigDecript("ConnectionStrings", "DatabaseLocalConfig");
            authToken = GetValueConfigDecript("SecurityKey", "AuthKey");
            cipherKey = GetValueConfigDecript("SecurityKey", "CipherKey");
            cultureDefault = GetValueConfig<string>("AppSettings", "CultureDefault");
        }

        private readonly string authToken;
        private readonly string cultureDefault;
        private readonly string cipherKey;
        private readonly string connectionString;
        private readonly IConfigurationSection AppSettingsSection;
        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();
            services.AddResponseCaching();
            services.AddRazorPages();

            services.AutoMapperConfigure();
            services.RunKyzinConfigure(Configuration);
            services.AddResponseCompressionService();
            services.AddWebMarkupMinConfigure();
            services.Configure<CodeMaze.Data.Systems.AppSettings>(AppSettingsSection);
            services.AddDbContext<KyzinDbContext>(options => options.UseSqlServer(connectionString));
            services.AddRepositoryService();
            services.AddExtensionService();
            services.CultureConfigure(cultureDefault);
            services.AddAesService(cipherKey);

            services.AddSession();
            services.AddAntiforgeryService(GetValueConfig<string>("CookieBaseName"));
            services.AddMvcCacheService();
            services.AddAuthenticationExtend(authToken);

            //services.AddScoped<RevokeAuthenticationEvents>();
            //services.AddTransient<ITicketStore, InMemoryTicketStore>();
            //services.AddSingleton<IPostConfigureOptions<CookieAuthenticationOptions>, ConfigureCookieAuthenticationOptions>();


            //services.AddCors(options =>
            //{
            //    options.AddPolicy(name: "app_codemaze",
            //                      builder =>
            //                      {
            //                          builder.WithOrigins(Configuration.GetValue<string>("BaseUrl"),
            //                                              "https://www.codemaze.net")
            //                                    .AllowAnyHeader()
            //                                    .WithMethods("POST");
            //                      });
            //});
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            var enforceHttps = bool.Parse(AppSettingsSection["EnforceHttps"]);

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                //app.UseDeveloperExceptionPage();
                //app.UseDatabaseErrorPage();
                app.UseStatusCodePages(async context =>
                {
                    var statusCode = context.HttpContext.Response.StatusCode;
                    var statusText = Microsoft.AspNetCore.WebUtilities.ReasonPhrases.GetReasonPhrase(statusCode);

                    context.HttpContext.Response.ContentType = "text/html";
                    await context.HttpContext.Response.WriteAsync($"<!DOCTYPE html><title>{statusCode}</title>");
                    await context.HttpContext.Response.WriteAsync("<html lang=\"en\"><body>\r\n");

                    await context.HttpContext.Response.WriteAsync($"<h1>{statusText}</h1>");

                    await context.HttpContext.Response.WriteAsync("</body></html>\r\n");
                    await context.HttpContext.Response.WriteAsync(new string(' ', 512)); // IE padding
                });

                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                if (enforceHttps == true)
                {
                    app.UseHttpsRedirection();
                    app.UseHsts();
                }
            }

            //app.UseStatusCodePagesWithRedirects("/error/{0}.html");
            app.SupportVietnameseContent();     // Support Viettnamese contents
            app.UseStaticFiles();
            app.AddSecurityHeader(enforceHttps);
            app.UseRouting();
            app.UseCookiePolicy();
            app.UseSession();
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseWebMarkupMin();
            app.UseMiddleware<PoweredByMiddleware>();
            app.UseResponseCaching();
            app.UseResponseCompression();
            //app.UseCors("app_codemaze");

            app.Use(async (context, next) =>
            {
                context.Response.GetTypedHeaders().CacheControl =
                    new Microsoft.Net.Http.Headers.CacheControlHeaderValue()
                    {
                        Public = true,
                        MaxAge = System.TimeSpan.FromMinutes(1)
                    };
                context.Response.Headers[Microsoft.Net.Http.Headers.HeaderNames.Vary] =
                    new string[] { "Accept-Encoding" };

                await next();
            });

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "api",
                    pattern: "api/{controller=Home}/{action=Index}/{id?}");

                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");

                endpoints.MapAreaControllerRoute(
                    name: "areas_default",
                    areaName: "Admin",
                    pattern: "{area:exists}/{controller=Dashboard}/{action=Index}/{id?}");

                endpoints.MapControllers();

                endpoints.MapRazorPages();
            });
        }

        private T GetValueConfig<T>(string key1 = null, string key2 = null, string key3 = null)
        {
            try
            {
                if (!string.IsNullOrWhiteSpace(key3))
                {
                    return Configuration.GetSection(key1).GetSection(key2).GetValue<T>(key1);
                }
                else if (!string.IsNullOrWhiteSpace(key2))
                {
                    return Configuration.GetSection(key1).GetValue<T>(key2);
                }
                return Configuration.GetValue<T>(key1);
            }
            catch (System.Exception)
            {
                return default(T);
            }
        }

        private string GetValueConfigDecript(string key1 = null, string key2 = null, string key3 = null)
        {
            var value = GetValueConfig<string>(key1, key2, key3);
            if (!string.IsNullOrWhiteSpace(value))
                return Base64Encryptor.Decrypt(value);
            return string.Empty;
        }
    }
}