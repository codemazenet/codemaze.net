using CodeMaze.ViewModels;

namespace CodeMaze.IServices
{
    public interface IPostService
    {
        Task<IReadOnlyList<PostItem>> GetPostItemListAsync(int index, int size);

        int CountPostPublish(string categoryUrl = "", string categoryCode = "");
    }
}