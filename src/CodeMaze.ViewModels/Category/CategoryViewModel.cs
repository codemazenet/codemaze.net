namespace CodeMaze.ViewModels
{
    public class CategoryViewModel
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Note { get; set; }

        public string Slug { get; set; }

        public string Url { get; set; }
        public string Code { get; set; }

        public bool ShowOnTab { get; set; }
        public int Position { get; set; }

        public bool Deleted { get; set; }
        public bool Publish { get; set; }
    }

    public class CategoryRequest : CategoryViewModel
    {

    }
}