namespace CodeMaze.ViewModels
{
    public class PageListView<T> where T : class
    {
        public List<T> Data { get; set; }
        public int Current { get; set; }
        public int Total { get; set; }

        public PageListView()
        {
            this.Data = new List<T>();
        }

        public PageListView(IReadOnlyList<T> data, int current = 1, int total = 0)
        {
            this.Data = data?.ToList() ?? new List<T>();
            this.Current = current;
            this.Total = total;
        }

        public PageListView(List<T> data, int current = 1, int total = 0)
        {
            this.Data = data;
            this.Current = current;
            this.Total = total;
        }
    }
}
