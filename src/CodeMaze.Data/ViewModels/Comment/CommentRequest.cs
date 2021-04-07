using System;

namespace CodeMaze.Data.ViewModels
{

    public class CommentRequest
    {
        public Guid? CommentId { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string IpAddress { get; set; }
        public DateTime? CreateOnUtc { get; set; }
        public string CommentContent { get; set; }
        public Guid? PostId { get; set; }
        public string UserAgent { get; set; }

        public CommentRequest()
        {
            PostId = Guid.Empty;
            CommentId = Guid.Empty;
            CreateOnUtc = DateTime.UtcNow;
        }
    }
}