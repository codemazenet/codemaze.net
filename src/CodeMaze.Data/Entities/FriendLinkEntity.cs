using System;

namespace CodeMaze.Data.Entities
{
    public class FriendLinkEntity
    {
        public Guid Id { get; set; }

        public string Title { get; set; }

        public string LinkUrl { get; set; }
    }
}