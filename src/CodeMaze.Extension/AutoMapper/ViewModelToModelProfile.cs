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

            CreateMap<CategoryViewModel, CategoryEditViewModel>();

            CreateMap<CommentRequest, CommentEntity>()
                .ForMember(dest => dest.IsApproved, opt => opt.MapFrom(src => false));
            CreateMap<CommentRequest, CommentReplyEntity>()
                .ForMember(dest => dest.ReplyContent, opt => opt.MapFrom(src => src.CommentContent))
                .ForMember(dest => dest.ReplyTimeUtc, opt => opt.MapFrom(src => DateTime.UtcNow));
        }
    }
}