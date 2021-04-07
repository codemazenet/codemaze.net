using CodeMaze.Configuration;
using CodeMaze.Data.Entities;
using CodeMaze.Data.ViewModels;
using CodeMaze.Extension;
using CodeMaze.Service;
using System;
using System.Linq;
using System.Web;

namespace CodeMaze.WebApp.Extensions
{
    public class PostExtension
    {
        public async System.Threading.Tasks.Task<PostEntity> GetPostEntityAsync(PostEditViewModel data, CategoryService categoryService, TagService tagService)
        {
            try
            {
                if (data == null) throw new ArgumentNullException();

                var postId = Guid.NewGuid();
                var postContent = HttpUtility.HtmlEncode(data.HtmlContent);
                var shortContent = !string.IsNullOrWhiteSpace(data.ShortContent) ? data.ShortContent :
                                    Utility.GetPostAbstract(data.HtmlContent, CodeMazeConfiguration.AppSettings.PostSummaryWords);
                var newTime = DateTime.UtcNow;
                var postCode = !string.IsNullOrWhiteSpace(data.Code) ? data.Code : data.Title.ConvertToCode();
                var postUrl = !string.IsNullOrWhiteSpace(data.Url) ? data.Url : data.Title.ConvertToUrl();

                var postModel = new PostEntity
                {
                    CommentEnabled = data.EnableComment,
                    Id = postId,
                    PostContent = postContent,
                    ContentAbstract = shortContent,
                    CreateOnUtc = newTime,
                    Code = postCode,
                    Url = postUrl,
                    Title = data.Title.Trim(),
                    IsDeleted = false,
                    IsPublished = data.IsPublished,
                    PubDateUtc = data.IsPublished ? newTime : (DateTime?)null,
                    ExposedToSiteMap = data.ExposedToSiteMap,
                    IsFeedIncluded = data.IsFeedIncluded,
                    PostExtension = new PostExtensionEntity
                    {
                        Hits = 0,
                        Likes = 0
                    }
                };

                // add categories
                if (data.CategoryIds?.Length > 0)
                {
                    var categoriesExists = await categoryService.CheckExistsAsync(data.CategoryIds.ToList());

                    foreach (var cid in categoriesExists)
                    {
                        postModel.PostCategory.Add(new PostCategoryEntity
                        {
                            CategoryId = cid,
                            PostId = postModel.Id
                        });
                    }
                }

                // add tags
                if (null != data.Tags && data.Tags.Length > 0)
                {
                    var tagList = data.Tags.Split(',');

                    foreach (string tagItem in tagList)
                    {
                        var getTag = tagService.GetTag(tagItem.ConvertToUrl());
                        var tagid = -1;

                        if (getTag != null)
                            tagid = getTag.Id;

                        if (getTag == null)
                        {
                            var newTag = new TagEntity
                            {
                                DisplayName = tagItem.RemoveMultipleWhiteSpaces(),
                                NormalizedName = tagItem.ConvertToUrl()
                            };

                            var tagAdded = tagService.Add(newTag);
                            if (tagAdded != null)
                            {
                                tagid = tagAdded.Id;
                            }
                        }

                        postModel.PostTag.Add(new PostTagEntity
                        {
                            TagId = tagid,
                            PostId = postModel.Id
                        });
                    }
                }

                return postModel;
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}