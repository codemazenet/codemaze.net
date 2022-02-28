using System;
using System.Collections.Generic;

namespace CodeMaze.ViewModels
{
    public class CommentListItem
    {
        public Guid Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string IpAddress { get; set; }
        public string CommentContent { get; set; }
        public string PostTitle { get; set; }
        public bool IsApproved { get; set; }
        public DateTime CreateOnUtc { get; set; }
        public IReadOnlyList<CommentReplyItem> CommentReplies { get; set; }
    }

    public class PostCommentListItem
    {
        public Guid Id { get; set; }
        public string Username { get; set; }
        public string LogoText
        {
            get
            {
                if (string.IsNullOrEmpty(Username))
                    return "K Z";
                var splitName = Username.Trim().Split(' ');

                var firtLeter = Username[0].ToString().ToUpper();
                if (splitName.Length == 1)
                    return firtLeter;

                return $"{firtLeter} {(splitName[splitName.Length - 1])[0].ToString().ToUpper()}";
            }
        }
        public DateTime CreateOnUtc { get; set; }
        public string CommentContent { get; set; }
        public IReadOnlyList<CommentReplyItem> CommentReplies { get; set; }

        public PostCommentListItem()
        {
            CommentReplies = new List<CommentReplyItem>();
        }
    }

    public class CommentReplyItem
    {
        
        public Guid Id { get; set; }

        public Guid ParentId { get; set; }

        public string Username { get; set; }

        public string LogoText
        {
            get
            {
                if (string.IsNullOrEmpty(Username))
                    return "K Z";
                var splitName = Username.Trim().Split(' ');

                var firtLeter = Username[0].ToString().ToUpper();
                if (splitName.Length == 1)
                    return firtLeter;

                return $"{firtLeter} {(splitName[splitName.Length - 1])[0].ToString().ToUpper()}";
            }
        }


        public DateTime ReplyTimeUtc { get; set; }

        public string ReplyContent { get; set; }
    }
}