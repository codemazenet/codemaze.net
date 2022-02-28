
using CodeMaze.Caching;
using CodeMaze.Data;
using CodeMaze.Extension;
using CodeMaze.IServices;
using CodeMaze.Service;
using CodeMaze.Service.Factory;

using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
IConfiguration Configuration = builder.Configuration;
// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddHttpContextAccessor();
builder.Services.AddSingleton(typeof(IActionContextAccessor), typeof(ActionContextAccessor));
builder.Services.AddSingleton(typeof(IHttpContextAccessor), typeof(HttpContextAccessor));
builder.Services.AddSingleton(typeof(IBlogCache), typeof(BlogCache));
builder.Services.AutoMapperConfigure();
builder.Services.AddScoped(typeof(CommonFactory));
builder.Services.AddScoped(typeof(RepositoryFactory));
builder.Services.AddScoped(typeof(IRepository<>), typeof(DbContextRepository<>));
builder.Services.AddScoped(typeof(IPostService), typeof(PostService));

builder.Services.AddDbContext<MazeCoreDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefautConnection")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
