using System;
using System.Collections.Generic;

namespace CodeMaze.Data.ViewModels
{
    public class PostItem
    {
        public Guid Id { get; set; }

        public DateTime PubDateUtc { get; set; }

        public string Image { get; set; }

        public string Title { get; set; }

        public string Url { get; set; }

        public string Code { get; set; }

        public string Link { get; set; }

        public string Content { get; set; }

        public bool EnableComment { get; set; }
        public int Views { get; set; }

        public int Hits { get; set; }

        public int Likes { get; set; }

        public int UserId { get; set; }

        public string MetaTitle { get; set; }

        public string MetaKeywords { get; set; }

        public string MetaDescription { get; set; }

        public IList<TagViewModel> Tags { get; set; }

        public IList<CategoryViewModel> Categories { get; set; }

        public IList<PostCommentListItem> Comments { get; set; }

        public UserInfo Author { get; set; }

        public PostItem()
        {
            Tags = new List<TagViewModel>();
            Categories = new List<CategoryViewModel>();
            Comments = new List<PostCommentListItem>();
        }
    }
}