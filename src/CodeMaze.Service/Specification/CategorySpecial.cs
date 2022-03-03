using CodeMaze.Data.Entities;

using System;
using System.Collections.Generic;

namespace CodeMaze.Service
{
    public class CategorySpecial : BaseSpecification<CategoryEntity>
    {
        public CategorySpecial(Guid categoryId) :
            base(c => c.Id == categoryId)
        {
        }

        public CategorySpecial(string url, string code) :
            base(c => c.Url.Equals(url) && c.Code.Equals(code))
        {
        }

        public CategorySpecial(bool isDeleted) :
            base(c => c.Deleted == isDeleted)
        {
            ApplyOrderBy(c => c.Position);
        }

        public CategorySpecial(List<Guid> ids) :
            base(c => ids.Contains(c.Id))
        {
        }
    }
}