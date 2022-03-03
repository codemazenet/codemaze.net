using CodeMaze.Data.Entities;

using Microsoft.EntityFrameworkCore;

namespace CodeMaze.Service
{
    public class PostCategorySpecial : BaseSpecification<PostCategoryEntity>
    {
        public PostCategorySpecial(string categoryUrl, string categoryCode)
            : base(p => (p.Category.Url.Equals(categoryUrl) && p.Category.Code.Equals(categoryCode)) && p.Post.IsPublished && !p.Post.IsDeleted)
        {
            AddInclude(pc => pc
                .Include(p => p.Post)
                .Include(c => c.Category));
        }
    }
}