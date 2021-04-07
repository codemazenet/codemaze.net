using System;

namespace CodeMaze.Data.ViewModels
{
    public abstract class PostRequest
    {
        public string Title { get; set; }
        public string Url { get; set; }
        public string Code { get; set; }
        public string HtmlContent { get; set; }
        public string ShortContent { get; set; }
        public bool EnableComment { get; set; }
        public bool IsPublished { get; set; }
        public bool ExposedToSiteMap { get; set; }
        public bool IsFeedIncluded { get; set; }
        public string ContentLanguageCode { get; set; }
        public string Image { get; set; }
        public string MetaTitle { get; set; }
        public string MetaKeywords { get; set; }
        public string MetaDescription { get; set; }
        public string[] Tags { get; set; }
        public Guid[] CategoryIds { get; set; }
    }

    public class CreatePostRequest : PostRequest
    {
        public CreatePostRequest()
        {
            Tags = new string[] { };
            CategoryIds = new Guid[] { };
        }
    }

    public class UpdatePostRequest : PostRequest
    {
        public Guid Id { get; }

        public UpdatePostRequest()
        {
            Tags = new string[] { };
            CategoryIds = new Guid[] { };
        }

        public UpdatePostRequest(Guid id)
        {
            Id = id;
            Tags = new string[] { };
            CategoryIds = new Guid[] { };
        }
    }
}