﻿using System;

namespace CodeMaze.ViewModels
{
    public class PostMetaData
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public DateTime? PubDateUtc { get; set; }
        public DateTime CreateOnUtc { get; set; }
        public int? Revision { get; set; }
        public bool IsPublished { get; set; }
        public int Hits { get; set; }
        public bool IsDeleted { get; set; }
    }
}