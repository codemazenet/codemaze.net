namespace CodeMaze.ViewModels
{
    public class PostItem
    {
        public Guid Id { get; set; }

        public DateTime PubDateUtc { get; set; }

        public string PubdateString => PubDateUtc.AddHours(7).ToString("MMMM dd, yyyy");

        public string Thumbnail { get; set; }

        public string Title { get; set; }

        public string Slug { get; set; }

        public string Code { get; set; }

        public string Content { get; set; }

        public int Views { get; set; }

        public int Comments { get; set; }

        public string Author { get; set; } = "Duy Khanh";

        public IList<CategoryViewModel> Categories { get; set; }

        public PostItem()
        {
            Categories = new List<CategoryViewModel>();
        }
    }
}