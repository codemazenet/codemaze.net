using Microsoft.EntityFrameworkCore;
using CodeMaze.Data.Entities;
using System;
using System.Linq;

namespace CodeMaze.Service
{
    public sealed class CommentSpecial : BaseSpecification<CommentEntity>
    {
        public CommentSpecial(int pageSize, int pageIndex) : base(c => true)
        {
            var startRow = (pageIndex - 1) * pageSize;

            AddInclude(comment => comment
                .Include(c => c.Post)
                .Include(c => c.CommentReply));
            ApplyOrderByDescending(p => p.CreateOnUtc);
            ApplyPaging(startRow, pageSize);
        }

        public CommentSpecial(Guid[] ids) : base(c => ids.Contains(c.Id))
        {
        }

        public CommentSpecial(Guid postId) : base(c => c.PostId == postId &&
                                                          c.IsApproved)
        {
            AddInclude(comments => comments.Include(c => c.CommentReply));
        }

        public CommentSpecial(string username, int pageIndex, int pageSize)
        {
            var startRow = (pageIndex - 1) * pageSize;

            AddCriteria(comment => !string.IsNullOrEmpty(comment.UserAgent) && 
                                    comment.UserAgent.ToLower().Equals(username.ToLower()));

            AddInclude(comment => comment
                .Include(c => c.Post)
                .Include(c => c.CommentReply));
            
            ApplyOrderByDescending(p => p.CreateOnUtc);

            ApplyPaging(startRow, pageSize);
        }

        public CommentSpecial(string username)
        {

            AddCriteria(comment => !string.IsNullOrEmpty(comment.UserAgent) &&
                                    comment.UserAgent.ToLower().Equals(username.ToLower()));
        }
    }
}