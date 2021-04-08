using CodeMaze.Configuration;
using CodeMaze.Data.ViewModels;
using CodeMaze.Data.ViewModels.Account;
using CodeMaze.Extension;
using CodeMaze.Service.Factory;

using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace CodeMaze.WebApp.Controllers
{
    public class AuthController : BaseController
    {
        private readonly RepositoryFactory repositoryFactory;
        private readonly CommonFactory commonFactory;

        public AuthController(
            RepositoryFactory repositoryFactory,
            CommonFactory commonFactory)
            : base(repositoryFactory, commonFactory)
        {
            this.repositoryFactory = repositoryFactory;
            this.commonFactory = commonFactory;
        }


        [HttpGet]
        [AllowAnonymous]
        [Route("/auth/login.html")]
        public IActionResult Login()
        {
            if (HttpContext.Session.HasValue(SessionHelper.SessionLogin))
            {
                return Redirect("/index.html");
            }

            return View();
        }

        [HttpPost()]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        [Route("/auth/login.html")]
        public async Task<IActionResult> LoginAsync([FromForm] AccountLoginViewModel account)
        {
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

            return Ok(user != null);
        }
    }
}