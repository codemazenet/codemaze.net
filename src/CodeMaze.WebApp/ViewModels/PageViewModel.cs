﻿using CodeMaze.Configuration;
using CodeMaze.Cryptography;

using Microsoft.AspNetCore.Http;

namespace CodeMaze.WebApp.ViewModels
{
    public class PageViewModel : BaseVM
    {
        public PageViewModel(
            IBlogConfig blogConfig,
            IHttpContextAccessor httpContextAccessor,
            ISymmetricEncryptor aceEncryptor)
            : base(blogConfig, httpContextAccessor, aceEncryptor)
        {
        }

        public object Items { get; set; }
        public object Title { get; set; }
        public string Token { get; set; }
    }
}