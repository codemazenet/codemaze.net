using AutoMapper;
using CodeMaze.Data.ViewModels;
using System;
using System.Web;

namespace CodeMaze.Extension
{
    public class ViewModelToViewModelProfile : Profile
    {
        public ViewModelToViewModelProfile()
        {
            CreateMap<PostEditViewModel, CreatePostRequest>()
                .ForMember(dest => dest.Title, opt => opt.MapFrom(src => !string.IsNullOrWhiteSpace(src.Title) ? src.Title.Trim() : string.Empty))
                .ForMember(dest => dest.HtmlContent, opt => opt.MapFrom(src => HttpUtility.HtmlEncode(src.HtmlContent)))
                .ForMember(dest => dest.ShortContent, opt => opt.MapFrom(src => src.HtmlContent.GetShortContent(src.ShortContent)))
                .ForMember(dest => dest.Code, opt => opt.MapFrom(src => src.Title.ConvertToCode()))
                .ForMember(dest => dest.Url, opt => opt.MapFrom(src => src.Title.ConvertToUrl()))
                .ForMember(dest => dest.Tags, opt => opt.MapFrom(src => src.Tags.ConvertToTags()));
            CreateMap<PostEditViewModel, UpdatePostRequest>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.Title, opt => opt.MapFrom(src => !string.IsNullOrWhiteSpace(src.Title) ? src.Title.Trim() : string.Empty))
                .ForMember(dest => dest.HtmlContent, opt => opt.MapFrom(src => HttpUtility.HtmlEncode(src.HtmlContent)))
                .ForMember(dest => dest.ShortContent, opt => opt.MapFrom(src => src.HtmlContent.GetShortContent(src.ShortContent)))
                .ForMember(dest => dest.Url, opt => opt.MapFrom(src => src.Title.ConvertToUrl()))
                .ForMember(dest => dest.Tags, opt => opt.MapFrom(src => src.Tags.ConvertToTags()));

            CreateMap<CommentEditViewModel, CommentRequest>()
                .ForMember(dest => dest.Username, opt => opt.MapFrom(src => src.Author))
                .ForMember(dest => dest.CreateOnUtc, opt => opt.MapFrom(src => DateTime.UtcNow))
                .ForMember(dest => dest.CommentContent, opt => opt.MapFrom(src => src.Comment));


            CreateMap<UserViewModel, UserProfileViewModel>()
               .ForMember(dest => dest.Birthday, opt => opt.MapFrom(src => Utility.FormatDate(src.Birthday, "")))
               .ForMember(dest => dest.Avatar, opt => opt.MapFrom(src => !string.IsNullOrEmpty(src.Avatar) ? src.Avatar : Utility.BaseUrl("/assets/default/images/avatar.png", false)))
               .ForMember(dest => dest.DisplayName, opt => opt.MapFrom(src => !string.IsNullOrEmpty(src.DisplayName) ? src.DisplayName : (!string.IsNullOrEmpty(src.UserName) ? src.UserName : src.Email)));


            CreateMap<PostViewModel, RecentPostViewModel>()
               .ForMember(dest => dest.Link, opt => opt.MapFrom(src => $"/post/{src.Url}-{src.Code}.html"))
               .ForMember(dest => dest.PublicDate, opt => opt.MapFrom(src => src.PubDateUtc.GetValueOrDefault()))
               .ForMember(dest => dest.Content, opt => opt.MapFrom(src => src.ContentAbstract));

            CreateMap<CommentViewModel, CommentItem>();
        }
    }
}