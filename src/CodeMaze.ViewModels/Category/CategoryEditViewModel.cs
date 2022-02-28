using System;
using System.ComponentModel.DataAnnotations;

namespace CodeMaze.ViewModels
{
    public class CategoryEditViewModel
    {
        public Guid Id { get; set; }

        [Required]
        [Display(Name = "Display Name")]
        public string DisplayName { get; set; }

        [Display(Name = "Url")]
        public string Url { get; set; }

        [Display(Name = "Code")]
        public string Code { get; set; }

        [Display(Name = "Description")]
        public string Note { get; set; }

        [Display(Name = "Position")]
        public int Position { get; set; }

        [Display(Name = "Show on tab")]
        public bool ShowOnTab { get; set; }

        public CategoryEditViewModel()
        {
            Id = Guid.NewGuid();
        }
    }
}