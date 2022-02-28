using System;

namespace CodeMaze.ViewModels
{
    public class RecentPostViewModel
    {
        public string Title { get; set; }
        public string Link { get; set; }
        public string Content { get; set; }
        public DateTime? PublicDate { get; set; }
    }
}