using AutoMapper;

using CodeMaze.Data.Entities;
using CodeMaze.ViewModels;

using System;
using System.Linq;
using System.Web;

namespace CodeMaze.Extension
{
    public class ModelToViewModelProfile : Profile
    {
        public ModelToViewModelProfile()
        {
            CreateMap<PostEntity, PostItem>()
              .ForMember(dest => dest.Slug, opt => opt.MapFrom(src => $"/post/{src.Url}-{src.Code}.html"))
              .ForMember(dest => dest.Content, opt => opt.MapFrom(src => src.ContentAbstract.BreakWord(250)))
              .ForMember(dest => dest.PubDateUtc, opt => opt.MapFrom(src => src.PubDateUtc.GetValueOrDefault()))
              .ForMember(dest => dest.Views, opt => opt.MapFrom(src => src.PostExtension.Views))
              .ForMember(dest => dest.Comments, opt => opt.MapFrom(src => src.Comment.Count))
              .ForMember(dest => dest.Thumbnail, opt => opt.MapFrom(src => src.Image))
              .ForMember(dest => dest.Categories, opt => opt.MapFrom(src => src.PostCategory.Select(c => new CategoryViewModel
              {
                  DisplayName = c.Category.DisplayName,
                  Slug = $"/category/{c.Category.Url}-{c.Category.Code}.html",
                  Id = c.Category.Id
              }).ToList()));

            CreateMap<CategoryEntity, CategoryItem>()
                .ForMember(dest => dest.Title, opt => opt.MapFrom(src => src.DisplayName))
                .ForMember(dest => dest.Slug, opt => opt.MapFrom(src => $"/category/{src.Url}-{src.Code}.html"))
                .ForMember(dest => dest.Position, opt => opt.MapFrom(src => src.Position))
                .ForMember(dest => dest.ShowOnTab, opt => opt.MapFrom(src => src.ShowOnTab));

            CreateMap<PostEntity, PostView>()
             .ForMember(dest => dest.EnableComment, opt => opt.MapFrom(src => src.CommentEnabled))
             .ForMember(dest => dest.Content, opt => opt.MapFrom(src => HttpUtility.HtmlDecode(Utility.ReplaceImgSrc(src.PostContent))))
             .ForMember(dest => dest.PubDateUtc, opt => opt.MapFrom(src => src.PubDateUtc.GetValueOrDefault()))
             .ForMember(dest => dest.Hits, opt => opt.MapFrom(src => src.PostExtension.Hits))
             .ForMember(dest => dest.Likes, opt => opt.MapFrom(src => src.PostExtension.Likes))
             .ForMember(dest => dest.Views, opt => opt.MapFrom(src => src.PostExtension.Views))
             .ForMember(dest => dest.Categories, opt => opt.MapFrom(src => src.PostCategory.Select(c => new CategoryItem
             {
                 Title = c.Category.DisplayName,
                 Slug = $"/category/{c.Category.Url}-{c.Category.Code}.html",
                 Position = c.Category.Position.GetValueOrDefault()
             }).ToList()))
             .ForMember(dest => dest.Tags, opt => opt.MapFrom(src => src.PostTag.Select(t => new TagItem
             {
                 Title = t.Tag.DisplayName,
                 Slug = $"/tag/{t.Tag.NormalizedName}.html"
             }).ToList()))
             .ForMember(dest => dest.Comments, opt => opt.MapFrom(src => src.Comment.Where(c => c.IsApproved).Select(cm => new CommentItem
             {
                 Comment = cm.CommentContent,
                 Username = cm.Username,
                 CreateOnUtc = cm.CreateOnUtc,
                 Comments = cm.CommentReply.Where(c => c.IsApproved).Select(cmr => new CommentItem
                 {
                     Id = cmr.Id,
                     Username = cmr.UserAgent,
                     Comment = cmr.ReplyContent,
                     CreateOnUtc = cmr.ReplyTimeUtc.GetValueOrDefault()
                 }).ToList()
             }).ToList()));



            //----------------------------------------------------------------------------

            CreateMap<CategoryEntity, CategoryViewModel>()
                .ForMember(dest => dest.Slug, opt => opt.MapFrom(src => $"/category/{src.Url}-{src.Code}.html"));

            CreateMap<CategoryEntity, CategoryManageViewModel>()
                .ForMember(dest => dest.Slug, opt => opt.MapFrom(src => $"/category/{src.Url}-{src.Code}.html"));

            CreateMap<CategoryEntity, CategoryItemViewModel>()
               .ForMember(dest => dest.Slug, opt => opt.MapFrom(src => $"/category/{src.Url}-{src.Code}.html"));

            CreateMap<CategoryEntity, CategoryEditViewModel>();

            CreateMap<PostEntity, PostManageViewModel>()
                .ForMember(dest => dest.Link, opt => opt.MapFrom(src => $"/post/{src.Url}-{src.Code}.html"))
                .ForMember(dest => dest.EnableComment, opt => opt.MapFrom(src => src.CommentEnabled))
                .ForMember(dest => dest.IsPublished, opt => opt.MapFrom(src => src.IsPublished));

            CreateMap<PostEntity, RecentPostViewModel>()
                .ForMember(dest => dest.Link, opt => opt.MapFrom(src => $"/post/{src.Url}-{src.Code}.html"))
                .ForMember(dest => dest.PublicDate, opt => opt.MapFrom(src => src.PubDateUtc.GetValueOrDefault()))
                .ForMember(dest => dest.Content, opt => opt.MapFrom(src => src.ContentAbstract));

            CreateMap<PostEntity, PostMetaData>()
                .ForMember(dest => dest.PubDateUtc, opt => opt.MapFrom(src => src.PubDateUtc))
                .ForMember(dest => dest.IsPublished, opt => opt.MapFrom(src => src.IsPublished))
                .ForMember(dest => dest.IsDeleted, opt => opt.MapFrom(src => src.IsDeleted))
                .ForMember(dest => dest.CreateOnUtc, opt => opt.MapFrom(src => src.CreateOnUtc.GetValueOrDefault()))
                .ForMember(dest => dest.Hits, opt => opt.MapFrom(src => src.PostExtension.Hits));

            CreateMap<PostEntity, RelatedPostViewModel>()
                .ForMember(dest => dest.Link, opt => opt.MapFrom(src => $"/post/{src.Url}-{src.Code}.html"));

            CreateMap<PostEntity, PostListItem>()
                .ForMember(dest => dest.Url, opt => opt.MapFrom(src => $"/post/{src.Url}-{src.Code}.html"))
                .ForMember(dest => dest.PubDateUtc, opt => opt.MapFrom(src => src.PubDateUtc.GetValueOrDefault()))
                //.ForMember(dest => dest.LastModifiedUtc, opt => opt.MapFrom(src => src.PubDateUtc.GetValueOrDefault()))
                .ForMember(dest => dest.Hits, opt => opt.MapFrom(src => src.PostExtension.Hits))
                .ForMember(dest => dest.Likes, opt => opt.MapFrom(src => src.PostExtension.Likes))
                .ForMember(dest => dest.Comments, opt => opt.MapFrom(src => src.PostExtension.Comments))
                .ForMember(dest => dest.Tags, opt => opt.MapFrom(src => src.PostTag.Select(pt => new TagViewModel
                {
                    NormalizedTagName = pt.Tag.NormalizedName,
                    TagName = pt.Tag.DisplayName,
                    TagUrl = $"/tag/{pt.Tag.NormalizedName}.html"
                }).ToList()))
                .ForMember(dest => dest.Categories, opt => opt.MapFrom(src => src.PostCategory.Where(pc => pc.PostId == src.Id).Select(pc => new CategoryViewModel()
                {
                    DisplayName = pc.Category.DisplayName,
                    Url = $"/category/{pc.Category.Url}-{pc.Category.Code}.html",
                }).ToList()));





            CreateMap<PostEntity, PostViewModel>();

            CreateMap<PostEntity, PostEditViewModel>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.IsPublished, opt => opt.MapFrom(src => src.IsPublished))
                .ForMember(dest => dest.HtmlContent, opt => opt.MapFrom(src => HttpUtility.HtmlDecode(src.PostContent)))
                .ForMember(dest => dest.ShortContent, opt => opt.MapFrom(src => src.ContentAbstract))
                .ForMember(dest => dest.EnableComment, opt => opt.MapFrom(src => src.CommentEnabled))
                .ForMember(dest => dest.ExposedToSiteMap, opt => opt.MapFrom(src => src.ExposedToSiteMap))
                .ForMember(dest => dest.IsFeedIncluded, opt => opt.MapFrom(src => src.IsFeedIncluded))
                .ForMember(dest => dest.Tags, opt => opt.MapFrom(src => src.PostTag.Select(pt => pt.Tag.DisplayName).Aggregate(string.Empty, (current, item) => current + (item + ",")).TrimEnd(',')))
                .ForMember(dest => dest.CategoryIds, opt => opt.MapFrom(src => src.PostCategory.Select(pt => pt.CategoryId)));

            CreateMap<PostTagEntity, TagViewModel>()
                .ForMember(dest => dest.NormalizedTagName, opt => opt.MapFrom(src => src.Tag.NormalizedName))
                .ForMember(dest => dest.TagName, opt => opt.MapFrom(src => src.Tag.DisplayName))
                .ForMember(dest => dest.TagUrl, opt => opt.MapFrom(src => $"/tag/{src.Tag.NormalizedName}.html"));

            CreateMap<PostTagEntity, PostListItem>()
                .ForMember(dest => dest.Title, opt => opt.MapFrom(src => src.Post.Title))
                .ForMember(dest => dest.Url, opt => opt.MapFrom(src => $"/post/{src.Post.Url}-{src.Post.Code}.html"))
                .ForMember(dest => dest.PubDateUtc, opt => opt.MapFrom(src => src.Post.PubDateUtc.GetValueOrDefault()))
                .ForMember(dest => dest.Image, opt => opt.MapFrom(src => src.Post.Image))
                .ForMember(dest => dest.ContentAbstract, opt => opt.MapFrom(src => src.Post.ContentAbstract))
                .ForMember(dest => dest.Views, opt => opt.MapFrom(src => src.Post.PostExtension.Views))
                .ForMember(dest => dest.Comments, opt => opt.MapFrom(src => src.Post.PostExtension.Comments))
                .ForMember(dest => dest.Likes, opt => opt.MapFrom(src => src.Post.PostExtension.Likes))
                .ForMember(dest => dest.Hits, opt => opt.MapFrom(src => src.Post.PostExtension.Hits))
                .ForMember(dest => dest.Image, opt => opt.MapFrom(src => src.Post.Image))
                .ForMember(dest => dest.Tags, opt => opt.MapFrom(src => src.Post.PostTag.Select(pt => new TagViewModel
                {
                    NormalizedTagName = pt.Tag.NormalizedName,
                    TagName = pt.Tag.DisplayName,
                    TagUrl = $"/tag/{pt.Tag.NormalizedName}.html"
                }).ToList()))
                .ForMember(dest => dest.Categories, opt => opt.MapFrom(src => src.Post.PostCategory.Select(pc => new CategoryViewModel()
                {
                    DisplayName = pc.Category.DisplayName,
                    Url = $"/category/{pc.Category.Url}-{pc.Category.Code}.html",
                }).ToList()));

            CreateMap<TagEntity, HotTagViewModel>()
               .ForMember(dest => dest.TagCount, opt => opt.MapFrom(src => src.PostTag.Count))
               .ForMember(dest => dest.NormalizedTagName, opt => opt.MapFrom(src => src.NormalizedName))
               .ForMember(dest => dest.TagName, opt => opt.MapFrom(src => src.DisplayName))
               .ForMember(dest => dest.TagUrl, opt => opt.MapFrom(src => $"/tag/{src.NormalizedName}.html"));

            CreateMap<PostCategoryEntity, CategoryItemViewModel>()
                 .ForMember(dest => dest.DisplayName, opt => opt.MapFrom(src => src.Category.DisplayName))
                 .ForMember(dest => dest.Slug, opt => opt.MapFrom(src => $"/category/{src.Category.Url}-{src.Category.Code}.html"));

            CreateMap<UserEntity, UserViewModel>()
                .ForMember(dest => dest.Role, opt => opt.MapFrom(src => (UserRole)Enum.Parse(typeof(UserRole), src.Role, true)))
                .ForMember(dest => dest.Password, opt => opt.Ignore())
                .ForMember(dest => dest.Salt, opt => opt.Ignore());

            CreateMap<UserEntity, UserViewModel>()
               .ForMember(dest => dest.Role, opt => opt.MapFrom(src => (UserRole)Enum.Parse(typeof(UserRole), src.Role, true)))
               .ForMember(dest => dest.Password, opt => opt.Ignore())
               .ForMember(dest => dest.Salt, opt => opt.Ignore());

            CreateMap<UserEntity, UserClaim>()
                .ForMember(dest => dest.Role, opt => opt.MapFrom(src => (UserRole)Enum.Parse(typeof(UserRole), src.Role, true)));

            CreateMap<CommentEntity, CommentViewModel>()
                .ForMember(dest => dest.PostLink, opt => opt.MapFrom(src => src.Post != null ? $"/post/{src.Post.Url}-{src.Post.Code}.html" : string.Empty))
                .ForMember(dest => dest.PostTitle, opt => opt.MapFrom(src => src.Post != null ? src.Post.Title : string.Empty));

            CreateMap<CommentReplyEntity, CommentReplyViewModel>();
        }
    }
}