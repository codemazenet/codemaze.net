using System;
using System.Collections.Generic;

namespace CodeMaze.Data.ViewModels
{
    public class PostManageViewModel
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Url { get; set; }
        public string Code { get; set; }
        public string Link { get; set; }
        public List<CategoryItemViewModel> Categories { get; set; }
        public bool EnableComment { get; set; }
        public bool IsPublished { get; set; }

        //public bool ExposedToSiteMap { get; set; }
        //public bool FeedIncluded { get; set; }
        public string Image { get; set; }

        //public string ContentLanguageCode { get; set; }

        public PostManageViewModel()
        {
            Categories = new List<CategoryItemViewModel>();
            //ContentLanguageCode = "en-us";
        }
    }
}