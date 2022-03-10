using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace CodeMaze.Data.Entities
{
    [Table(name: "Category")]
    public class CategoryEntity
    {
        public CategoryEntity()
        {
            PostCategory = new HashSet<PostCategoryEntity>();
        }

        public Guid Id { get; set; }
        public string Url { get; set; }
        public string Code { get; set; }
        public string Title { get; set; }
        public string Note { get; set; }
        public int? Position { get; set; }
        public bool Deleted { get; set; }
        public bool Publish { get; set; }
        public bool ShowOnTab { get; set; }

        public virtual ICollection<PostCategoryEntity> PostCategory { get; set; }
    }
}