namespace CodeMaze.ViewModels
{
    public abstract class BaseViewModel
    {
        public string MazeToken { get; set; }

        public UserClaim UserClaim { get; set; }
    }
}