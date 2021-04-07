using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeMaze.Data.ViewModels
{
    public class CommentViewModel
    {
        public Guid Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string IPAddress { get; set; }
        public DateTime CreateOnUtc { get; set; }
        public string CommentContent { get; set; }
        public Guid PostId { get; set; }
        public bool IsApproved { get; set; }
        public string UserAgent { get; set; }

        /// <summary>
        /// Post title reference
        /// </summary>
        public string PostTitle { get; set; }
        /// <summary>
        /// Post link reference
        /// </summary>
        public string PostLink { get; set; }

        public virtual ICollection<CommentReplyViewModel> CommentReply { get; set; }
    }
}
