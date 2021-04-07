﻿using System;

namespace CodeMaze.Data.Entities
{
    public class PostExtensionEntity
    {
        public Guid PostId { get; set; }
        public int Hits { get; set; }
        public int Likes { get; set; }
        public int Views { get; set; }
        public int Comments { get; set; }

        public virtual PostEntity Post { get; set; }
    }
}