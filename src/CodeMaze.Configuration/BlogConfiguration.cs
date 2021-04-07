using System;

namespace CodeMaze.Configuration
{
    public class BlogConfiguration
    {
        public int Id { get; set; }

        public string CfgKey { get; set; }

        public string CfgValue { get; set; }

        public DateTime? LastModifiedTimeUtc { get; set; }
    }
}