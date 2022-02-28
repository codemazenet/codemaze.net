namespace CodeMaze.ViewModels
{
    public class CommentItem
    {
        public Guid Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public DateTime CreateOnUtc { get; set; }
        public string CreatedateString => CreateOnUtc.AddHours(7).ToString("MMMM dd, yyyy");
        public string Comment { get; set; }

        public List<CommentItem> Comments { get; set; }

        public CommentItem()
        {
            Comments = new List<CommentItem>();
        }
    }
}