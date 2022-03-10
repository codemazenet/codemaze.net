using AutoMapper;

using CodeMaze.Data.Entities;
using CodeMaze.ViewModels;

using System;

namespace CodeMaze.Extension
{
    public class ViewModelToModelProfile : Profile
    {
        public ViewModelToModelProfile()
        {
            CreateMap<UserViewModel, UserEntity>();

            CreateMap<CategoryRequest, CategoryEntity>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => Guid.NewGuid()))
                .ForMember(dest => dest.Title, opt => opt.MapFrom(src => src.Title.RemoveMultipleWhiteSpaces()))
                .ForMember(dest => dest.Url, opt => opt.MapFrom(src => src.Title.ConvertToUrl()))
                .ForMember(dest => dest.Code, opt => opt.MapFrom(src => src.Title.ConvertToCode()))
                .ForMember(dest => dest.Note, opt => opt.MapFrom(src => src.Note.BreakWord(250)));

            CreateMap<CommentRequest, CommentEntity>()
                .ForMember(dest => dest.IsApproved, opt => opt.MapFrom(src => false));
            CreateMap<CommentRequest, CommentReplyEntity>()
                .ForMember(dest => dest.ReplyContent, opt => opt.MapFrom(src => src.CommentContent))
                .ForMember(dest => dest.ReplyTimeUtc, opt => opt.MapFrom(src => DateTime.UtcNow));
        }
    }
}