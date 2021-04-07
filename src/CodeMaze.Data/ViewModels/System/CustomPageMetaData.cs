using System;

namespace CodeMaze.Data.ViewModels
{
    public class CustomPageMetaData
    {
        public Guid Id { get; set; }

        public string Title { get; set; }

        public string RouteName { get; set; }

        public DateTime CreateOnUtc { get; set; }
    }
}