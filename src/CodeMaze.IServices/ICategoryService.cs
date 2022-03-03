using CodeMaze.ViewModels;

namespace CodeMaze.IServices
{
    public interface ICategoryService
    {
        //Task<CategoryItem> GetCategoryAsync(string url, string code);

        Task<string> GetNameAsync(string url, string code);
        Task<IReadOnlyList<CategoryItem>> GetCategoriesPublishAsync();
    }
}
