using CodeMaze.Data.Entities;
using System;
using System.Linq;

namespace CodeMaze.Service
{
    public sealed class PostPagingSpecial : BaseSpecification<PostEntity>
    {
        public PostPagingSpecial(int pageSize, int pageIndex, Guid? categoryId = null)
            : base(p => !p.IsDeleted && p.IsPublished &&
                        (categoryId == null || p.PostCategory.Select(c => c.CategoryId).Contains(categoryId.Value)))
        {
            var startRow = (pageIndex - 1) * pageSize;

            //AddInclude(post => post
            //    .Include(p => p.PostPublish)
            //    .Include(p => p.PostExtension)
            //    .Include(p => p.PostTag)
            //    .ThenInclude(pt => pt.Tag));
            ApplyPaging(startRow, pageSize);
            ApplyOrderByDescending(p => p.PubDateUtc);
        }
    }
}