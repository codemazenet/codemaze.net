using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CodeMaze.Data.ViewModels
{
    public class PostEditViewModel
    {
        public Guid Id { get; set; }

        [Required(ErrorMessage = "Please enter a title.")]
        public string Title { get; set; }

        [RegularExpression(@"[a-z0-9\-]+", ErrorMessage = "Only lower case letters and hyphens are allowed.")]
        public string Url { get; set; }

        [RegularExpression(@"[a-zA-Z0-9]+", ErrorMessage = "Only lower case letters and hyphens are allowed.")]
        public string Code { get; set; }

        [JsonIgnore]
        public List<CheckBoxViewModel> CategoryList { get; set; }

        [Required]
        [Display(Name = "Enable Comment")]
        public bool EnableComment { get; set; }

        [JsonIgnore]
        [DataType(DataType.Text)]
        public string ShortContent { get; set; }

        [Required(ErrorMessage = "Please enter content.")]
        [JsonIgnore]
        [DataType(DataType.MultilineText)]
        public string HtmlContent { get; set; }

        [Required]
        [Display(Name = "Publish Now")]
        public bool IsPublished { get; set; }

        [Display(Name = "Site Map")]
        public bool ExposedToSiteMap { get; set; }

        [Display(Name = "Tags")]
        public string Tags { get; set; }

        public string Image { get; set; }

        [Required(ErrorMessage = "Please enter language code.")]
        [Display(Name = "Content Language")]
        [RegularExpression(@"^[a-z]{2}-[a-zA-Z]{2}$", ErrorMessage = "Incorrect language code format. e.g. en-us")]
        public string ContentLanguageCode { get; set; }

        [Display(Name = "Feed Subscription")]
        public bool IsFeedIncluded { get; set; }

        [Display(Name = "Meta Title")]
        public string MetaTitle { get; set; }

        [Display(Name = "Meta Keywords")]
        public string MetaKeywords { get; set; }

        [Display(Name = "Meta Description")]
        public string MetaDescription { get; set; }

        [Required(ErrorMessage = "Please select at least one category.")]
        public Guid[] CategoryIds { get; set; }

        public PostEditViewModel()
        {
            Id = Guid.Empty;
            ContentLanguageCode = "en-us";
        }
    }
}