﻿using System;

namespace CodeMaze.Data.ViewModels
{
    public class TokenValidateViewModel
    {
        public Guid SessionId { get; set; }
        public long Time { get; set; }
        public string Token { get; set; }
    }
}