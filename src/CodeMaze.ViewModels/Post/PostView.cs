namespace CodeMaze.ViewModels
{
    public class PostView
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Url { get; set; }
        public string Code { get; set; }
        public string Content { get; set; }
        public bool EnableComment { get; set; }
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
        public int Hits { get; set; }
        public int Likes { get; set; }
        public int Views { get; set; }

        public List<CategoryItem> Categories { get; set; }
        public List<TagItem> Tags { get; set; }
        public List<CommentItem> Comments { get; set; }

        public PostView()
        {
            Categories = new List<CategoryItem>();
            Tags = new List<TagItem>();
            Comments = new List<CommentItem>();
        }
    }
}
