using CodeMaze.Data.Entities;

namespace CodeMaze.Service
{
    public sealed class UserSpecial : BaseSpecification<UserEntity>
    {
        public UserSpecial(int userId)
            : base(u => u.Id.Equals(userId))
        {
        }

        public UserSpecial(string username, bool email = false)
        {
            if (email)
                AddCriteria(u => u.Email.Equals(username));
            else
                AddCriteria(u => u.UserName.Equals(username));
        }

        public UserSpecial(string username, string hasPassword)
            : base(u => u.UserName.Equals(username) && u.Password.Equals(hasPassword))
        {
        }
    }
}