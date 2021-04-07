using System;

namespace CodeMaze.Data.ViewModels
{
    public class CategoryManageViewModel : CategoryItemViewModel
    {
        public Guid Id { get; set; }
        public bool Deleted { get; set; }
        public bool Enable { get; set; }
    }
}