using System;
using System.Collections.Generic;

namespace CodeMaze.Data.ViewModels
{
    public class PostListItem
    {
        public DateTime PubDateUtc { get; set; }

        public string Title { get; set; }

        public string Url { get; set; }

        public string Image { get; set; }

        public string ContentAbstract { get; set; }

        public int Hits { get; set; }
        public int Comments { get; set; }
        public int Likes { get; set; }
        public int Views { get; set; }

        public IList<TagViewModel> Tags { get; set; }

        public IList<CategoryViewModel> Categories { get; set; }

        public UserInfo Author { get; set; }

        public PostListItem()
        {
            Tags = new List<TagViewModel>();
            Categories = new List<CategoryViewModel>();
        }
    }
}