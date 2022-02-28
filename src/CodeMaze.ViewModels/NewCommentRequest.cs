﻿using System;

namespace CodeMaze.ViewModels
{
    public class NewCommentRequest
    {
        public string Username { get; set; }

        public string Content { get; set; }

        public Guid PostId { get; set; }

        public string Email { get; set; }

        public string IpAddress { get; set; }

        public string UserAgent { get; set; }
    }
}