using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CodeMaze.Data.ViewModels
{
    public class CommentEditViewModel
    {
        public Guid? PostId { get; set; }
        public Guid? CommentId { get; set; }
        public string Author { get; set; }
        public string Email { get; set; }
        public string Comment { get; set; }

        public CommentEditViewModel()
        {
            PostId = Guid.Empty;
            CommentId = Guid.Empty;
        }
    }
}
