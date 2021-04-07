using System;
using System.Collections.Generic;

namespace CodeMaze.Data.Entities
{
    public class PostEntity
    {
        public PostEntity()
        {
            Comment = new HashSet<CommentEntity>();
            PostCategory = new HashSet<PostCategoryEntity>();
            PostTag = new HashSet<PostTagEntity>();
            LastModifiedUtc = DateTime.UtcNow;
        }

        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Url { get; set; }
        public string Code { get; set; }
        public string PostContent { get; set; }
        public bool CommentEnabled { get; set; }
        public DateTime? CreateOnUtc { get; set; }
        public string ContentAbstract { get; set; }
        public string Image { get; set; }
        public int UserId { get; set; }
        public string MetaTitle { get; set; }
        public string MetaKeywords { get; set; }
        public string MetaDescription { get; set; }
        public bool ExposedToSiteMap { get; set; }
        public bool IsFeedIncluded { get; set; }
        public DateTime? PubDateUtc { get; set; }
        public DateTime? LastModifiedUtc { get; set; }
        public bool IsPublished { get; set; }
        public bool IsDeleted { get; set; }
        public virtual PostExtensionEntity PostExtension { get; set; }
        public virtual UserEntity User { get; set; }
        public virtual ICollection<CommentEntity> Comment { get; set; }
        public virtual ICollection<PostCategoryEntity> PostCategory { get; set; }
        public virtual ICollection<PostTagEntity> PostTag { get; set; }
    }
}