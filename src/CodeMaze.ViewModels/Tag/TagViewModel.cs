namespace CodeMaze.ViewModels
{
    public class TagViewModel
    {
        public int Id { get; set; }

        public string TagName { get; set; }

        public string NormalizedTagName { get; set; }

        public string TagUrl { get; set; }
    }


    public class TagItem
    {
        public string Title { get; set; }

        public string Slug { get; set; }
    }
}