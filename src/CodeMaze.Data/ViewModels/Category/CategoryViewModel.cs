using System;

namespace CodeMaze.Data.ViewModels
{
    public class CategoryViewModel : CategoryItemViewModel
    {
        public Guid Id { get; set; }
        public string Note { get; set; }
        public string Description { get; set; }
        public bool Deleted { get; set; }
    }
}