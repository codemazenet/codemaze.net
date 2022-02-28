namespace CodeMaze.ViewModels
{
    public class PageView<T> where T : class
    {
        public T Data { get; set; }
        public bool EnableSidebar { get; set; } = true;
        public bool EnableComment { get; set; } = true;

        public PageView()
        {
            this.Data = default(T);
        }

        public PageView(T data)
        {
            this.Data = data;
        }
    }
}
