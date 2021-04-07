namespace CodeMaze.Data.ViewModels
{
    public class UserViewModel : UserClaim
    {
        public string Password { get; set; }
        public string Salt { get; set; }
        public string Linkedin { get; set; }
        public string Facebook { get; set; }
        public string Youtube { get; set; }
        public string Twitter { get; set; }
        public string Skype { get; set; }
        public string Instagram { get; set; }
    }
}