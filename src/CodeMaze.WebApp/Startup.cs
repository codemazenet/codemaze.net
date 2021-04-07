using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using CodeMaze.Configuration;
using CodeMaze.Data;
using CodeMaze.Extension;
using CodeMaze.Middleware;
using CodeMaze.WebApp.Extensions;
using System.IO.Compression;
using System.Linq;
using WebMarkupMin.AspNetCore3;

namespace CodeMaze.WebApp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
            AppSettingsSection = Configuration.GetSection(nameof(CodeMaze.Data.Systems.AppSettings));
        }

        private readonly IConfigurationSection AppSettingsSection;
        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            
            //services.AddDbContext<ApplicationDbContext>(options =>
            //    options.UseSqlServer(
            //        Configuration.GetConnectionString("KyzinDatabase")));

            //services.AddDefaultIdentity<IdentityUser>(options => options.SignIn.RequireConfirmedAccount = true)
            //    .AddEntityFrameworkStores<ApplicationDbContext>();
            services.AddControllersWithViews();
            services.AddResponseCaching();
            services.AddRazorPages();
            services.AddResponseCompression(options =>
            {
                options.Providers.Add<BrotliCompressionProvider>();
                options.Providers.Add<GzipCompressionProvider>();
                options.MimeTypes =
                    ResponseCompressionDefaults.MimeTypes.Concat(
                        new[] { "image/svg+xml" });
            });
            services.Configure<BrotliCompressionProviderOptions>(options =>
            {
                options.Level = CompressionLevel.Fastest;
            });
            services.Configure<GzipCompressionProviderOptions>(options =>
            {
                options.Level = CompressionLevel.Fastest;
            });

            services.RunKyzinConfigure(Configuration);

            services.Configure<CodeMaze.Data.Systems.AppSettings>(AppSettingsSection);

            services.AddDbContext<KyzinDbContext>(options =>
               options.UseSqlServer(CodeMazeConfiguration.DatabaseInfo.ConnectionString));

            services.AutoMapperConfigure();

            services.CultureConfigure(AppSettingsSection["CultureDefault"]);

            services.AddSession();

            services.AddAntiforgery(options =>
            {
                var cookieBaseName = Configuration.GetValue<string>("CookieBaseName");
                options.Cookie.Name = $"X-{cookieBaseName}";
                options.FormFieldName = $"{cookieBaseName}-FORM";
            });

            services.AddRepositoryService();
            services.AddExtensionService();

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

            services.AddWebMarkupMinConfigure();

            services.AddAuthenticationExtend();
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
            // Support Viettnamese contents
            app.SupportVietnameseContent();
            app.UseStaticFiles();
            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseSession();
            app.UseWebMarkupMin();
            app.UseMiddleware<PoweredByMiddleware>();
            app.AddSecurityHeader(enforceHttps);
            app.UseResponseCaching();
            app.UseResponseCompression();

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
    }
}