using CodeMaze.Data.Entities;
using System;

namespace CodeMaze.Service
{
    public class CommentReplySpecial : BaseSpecification<CommentReplyEntity>
    {
        public CommentReplySpecial(Guid commentId) : base(cr => cr.CommentId == commentId)
        {
        }
    }
}