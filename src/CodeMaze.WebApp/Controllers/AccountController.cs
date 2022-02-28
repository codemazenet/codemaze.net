using CodeMaze.Configuration;
using CodeMaze.Extension;
using CodeMaze.Service.Factory;
using CodeMaze.ViewModels;
using CodeMaze.ViewModels.Account;

using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace CodeMaze.WebApp.Controllers
{
    public class AccountController : BaseController
    {
        public AccountController(
            RepositoryFactory repositoryFactory,
            CommonFactory commonFactory)
            : base(repositoryFactory, commonFactory)
        { }

        //[AllowAnonymous]
        //public IActionResult Index()
        //{
        //    var user = new UserViewModel
        //    {
        //        UserName = "admin",
        //        DisplayName = "Admin",
        //        Email = "khanhnd157@gmail.com",
        //        Password = "NdkhanhN",
        //        Role = UserRole.Administrator
        //    };
        //    var user1 = new UserViewModel
        //    {
        //        UserName = "khanhnd157",
        //        DisplayName = "Duy Khanh",
        //        Email = "luv.keny@gmail.com",
        //        Password = "NdkhanhN",
        //        Role = UserRole.Member
        //    };

        //    _userService.Register(user);
        //    _userService.Register(user1);
        //    return Ok("Done");
        //}

        [Route("/user/{username}.html")]
        [AllowAnonymous]
        public async Task<IActionResult> Profile(string username)
        {
            var profile = new ProfileViewer();

            ViewData["Title"] = "View Profile";

            var user = await repositoryFactory.User.GetByUsernameAsync(username);

            if (user is null)
                return NotFound("Access denied!");

            var posts = await repositoryFactory.Post.GetPostByUserIdAsync(user.Id);
            var postCount = await repositoryFactory.Post.CountByUserId(user.Id);
            var comments = await repositoryFactory.Comment.GetCommentsByUsernameAsync(username);
            var commentCount = await repositoryFactory.Comment.CountByUsernameAsync(username);

            profile.UserProfile = commonFactory.Mapper.Map<UserProfileViewModel>(user);
            profile.Posts = posts?.Select(post => commonFactory.Mapper.Map<RecentPostViewModel>(post)).ToList();
            profile.Comments = comments?.Select(comment => commonFactory.Mapper.Map<CommentItem>(comment)).ToList();
            profile.TotalPost = postCount;
            profile.TotalComment = commentCount;

            return View("Profile", profile);
        }

        [Route("/login.html"), Route("/login")]
        [HttpGet]
        [AllowAnonymous]
        public IActionResult Login()
        {
            if (HttpContext.Session.HasValue(SessionHelper.SessionLogin))
            {
                return Redirect("/index.html");
            }

            return View();
        }

        [Route("/login.html"), Route("/login")]
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Login([FromForm] AccountLoginViewModel account = null)
        {
            if (account is null || (account != null && string.IsNullOrEmpty(account.Username) && string.IsNullOrEmpty(account.Password)))
            {
                return Redirect("/login.html");
            }

            var user = await repositoryFactory.User.SignInAsync(account.Username, account.Password);

            if (user is null) return View();

            var claims = new List<Claim>
                {
                    new Claim(ClaimUserTypes.UserName, user.UserName),
                    new Claim(ClaimUserTypes.Email, user.Email),
                    new Claim(ClaimUserTypes.Avatar, user.Avatar??string.Empty),
                    new Claim(ClaimUserTypes.About, user.About??string.Empty),
                    new Claim(ClaimUserTypes.Role, user.Role.ToString())
                };

            var identity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
            var principal = new ClaimsPrincipal(identity);

            await HttpContext.SignInAsync(
                CookieAuthenticationDefaults.AuthenticationScheme,
                principal,
                new AuthenticationProperties
                {
                    IsPersistent = true,
                    ExpiresUtc = DateTime.Now.AddSeconds(CodeMazeConfiguration.AppSettings.SessionTimeOut)
                });

            HttpContext.Session.Set<UserClaim>(SessionHelper.SessionLogin, user);

            if (user.Role == UserRole.Member)
            {
                return Redirect("/index.html");
            }

            return Redirect("/dashboard");
        }

        [Route("/logout.html")]
        [Authorize]
        [HttpGet]
        public async Task<IActionResult> LogoutAsync()
        {
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);

            if (HttpContext.Session.HasValue(SessionHelper.SessionLogin))
            {
                HttpContext.Session.Remove(SessionHelper.SessionLogin);
            }

            return Redirect("/index.html");
        }
    }
}