using CodeMaze.Results;
using CodeMaze.ViewModels;

namespace CodeMaze.IServices
{
    public interface ICategoryService
    {
        //Task<CategoryItem> GetCategoryAsync(string url, string code);

        Task<string> GetNameAsync(string url, string code);

        Task<IReadOnlyList<CategoryItem>> GetCategoriesPublishAsync();

        Task<IReadOnlyList<CategoryViewModel>> GetCategoriesByStatusAsync(string status);

        Task<IResult<bool>> ExecuteUpdateAsync(Guid id, CategoryRequest request);

        Task<IResult<bool>> ExecuteAddAsync(CategoryRequest request);
    }
}
