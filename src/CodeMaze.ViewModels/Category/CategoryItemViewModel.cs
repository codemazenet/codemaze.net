namespace CodeMaze.ViewModels
{
    public class CategoryItemViewModel : CategoryRequestViewModel
    {
        public string Slug { get; set; }
        public string DisplayName { get; set; }
    }

    public class CategoryItem
    {
        public Guid Id { get; set; }
        public string Slug { get; set; }
        public string Title { get; set; }
        public bool ShowOnTab { get; set; }
        public int Position { get; set; }
    }
}