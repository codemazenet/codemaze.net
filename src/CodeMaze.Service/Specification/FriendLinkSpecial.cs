using CodeMaze.Data.Entities;
using System;

namespace CodeMaze.Service
{
    public class FriendLinkSpecial : BaseSpecification<FriendLinkEntity>
    {
        public FriendLinkSpecial(Guid id) : base(f => f.Id == id)
        {
        }
    }
}