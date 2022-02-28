using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeMaze.ViewModels
{
    public class ProfileViewer
    {
        public UserProfileViewModel UserProfile { get; set; }
        public List<RecentPostViewModel> Posts { get; set; }
        public List<CommentItem> Comments { get; set; }

        public int TotalPost { get; set; }
        public int TotalComment { get; set; }

        public ProfileViewer()
        {
            Posts = new List<RecentPostViewModel>();
            Comments = new List<CommentItem>();
        }
    }
}
