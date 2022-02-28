namespace CodeMaze.ViewModels
{
    public class PostEditViewModel
    {
        public Guid Id { get; set; }

        public string Title { get; set; }

        public string Url { get; set; }

        public string Code { get; set; }

        public List<CheckBoxViewModel> CategoryList { get; set; }

        public bool EnableComment { get; set; }

        public string ShortContent { get; set; }

        public string HtmlContent { get; set; }

        public bool IsPublished { get; set; }

        public bool ExposedToSiteMap { get; set; }

        public string Tags { get; set; }

        public string Image { get; set; }

        public string ContentLanguageCode { get; set; }

        public bool IsFeedIncluded { get; set; }

        public string MetaTitle { get; set; }

        public string MetaKeywords { get; set; }

        public string MetaDescription { get; set; }

        public Guid[] CategoryIds { get; set; }

        public PostEditViewModel()
        {
            Id = Guid.Empty;
            ContentLanguageCode = "en-us";
        }
    }
}