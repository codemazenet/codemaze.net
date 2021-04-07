namespace CodeMaze.Data.ViewModels
{
    public abstract class BaseViewModel
    {
        public string KyzinToken { get; set; }

        public UserClaim UserClaim { get; set; }
    }
}