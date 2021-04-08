namespace CodeMaze.WebApp.Extensions
{
    using CodeMaze.Configuration;
    using CodeMaze.Cryptography.Symmetric;
    using CodeMaze.Data.ViewModels;

    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Filters;

    using Newtonsoft.Json;

    using System;

    [AttributeUsage(AttributeTargets.Method)]
    public class ValidateActionPost : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            try
            {
                if (context.HttpContext.Request.Method == "POST")
                {
                    var aesEncryptionService = context.HttpContext.RequestServices.GetService(typeof(IAesEncryptor)) as IAesEncryptor;

                    var antiToken = (string)context.HttpContext.Request.Headers["CodeMaze-Token"];

                    var tokenDecrypt = aesEncryptionService.Decrypt(antiToken);

                    var token = JsonConvert.DeserializeObject<TokenValidateViewModel>(tokenDecrypt);

                    if (!token.Token.Equals(CodeMazeConfiguration.TokenValidatePost))
                    {
                        context.Result = new BadRequestResult();
                    }
                }

                if (!context.ModelState.IsValid)
                {
                    context.Result = new BadRequestResult();
                }
            }
            catch (Exception)
            {
                context.Result = new BadRequestResult();
            }
        }
    }
}