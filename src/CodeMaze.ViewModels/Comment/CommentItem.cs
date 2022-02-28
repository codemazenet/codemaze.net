using System;

namespace CodeMaze.ViewModels
{
    public class CommentItem
    {
        public Guid Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public DateTime CreateOnUtc { get; set; }
        public string CommentContent { get; set; }
        public bool IsApproved { get; set; }
        /// <summary>
        /// Post title reference
        /// </summary>
        public string PostTitle { get; set; }
        /// <summary>
        /// Post link reference
        /// </summary>
        public string PostLink { get; set; }
    }
}