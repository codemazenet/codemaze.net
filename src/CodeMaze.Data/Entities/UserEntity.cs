using System;

namespace CodeMaze.Data.Entities
{
    public class UserEntity
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string DisplayName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Salt { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public DateTime? Birthday { get; set; }
        public string Avatar { get; set; }
        public string About { get; set; }
        public string Role { get; set; }
        public string Linkedin { get; set; }
        public string Facebook { get; set; }
        public string Youtube { get; set; }
        public string Twitter { get; set; }
        public string Skype { get; set; }
        public string Instagram { get; set; }
    }
}