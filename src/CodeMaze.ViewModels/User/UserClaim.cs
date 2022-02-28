namespace CodeMaze.ViewModels
{
    public class UserClaim : UserInfo
    {
        public int Id { get; set; }
        public string About { get; set; }
        public UserRole Role { get; set; }
    }
}