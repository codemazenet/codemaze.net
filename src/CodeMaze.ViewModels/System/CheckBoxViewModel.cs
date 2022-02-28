namespace CodeMaze.ViewModels
{
    public class CheckBoxViewModel
    {
        public CheckBoxViewModel(string displayText, string value, bool isChecked)
        {
            Value = value;
            DisplayText = displayText;
            IsChecked = isChecked;
        }

        public CheckBoxViewModel(string displayText, string value, bool isChecked, string image)
        {
            Value = value;
            DisplayText = displayText;
            IsChecked = isChecked;
            Image = image;
        }

        public string Value { get; }
        public string DisplayText { get; }
        public bool IsChecked { get; }
        public string Image { get; }
    }
}