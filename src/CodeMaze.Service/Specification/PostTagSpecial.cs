using Microsoft.EntityFrameworkCore;
using CodeMaze.Data.Entities;

namespace CodeMaze.Service
{
    public sealed class PostTagSpecial : BaseSpecification<PostTagEntity>
    {
        public PostTagSpecial(int tagId) : base(pt => pt.TagId == tagId)
        {
        }

        public PostTagSpecial(string normalizedName)
            : base(ptag => ptag.Tag.NormalizedName.Contains(normalizedName))
        {
            AddCriteria(p => p.Post.IsPublished && !p.Post.IsDeleted);

            AddInclude(tag => tag
                     .Include(tag => tag)
                     .Include(pt => pt.Post));
        }
    }
}