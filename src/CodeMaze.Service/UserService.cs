using AutoMapper;
using NK.Extension;
using CodeMaze.Data.Entities;
using CodeMaze.Data.RequestResponse;
using CodeMaze.Data.ViewModels;
using CodeMaze.Extension;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace CodeMaze.Service
{
    public class UserService : KyzinService
    {
        private readonly IRepository<UserEntity> _userRepository;

        public UserService(
            IRepository<UserEntity> userRepository,
            IMapper mapper = null)
            : base(mapper: mapper)
        {
            _userRepository = userRepository;
        }

        public async Task<UserClaim> GetById(int id)
        {
            return await _userRepository.SelectFirstOrDefaultAsync(
                                new UserSpecial(id),
                                user => _mapper.Map<UserClaim>(user),
                                false);
        }

        public Task<UserViewModel> GetByUsernameAsync(string username)
        {
            var spec = new UserSpecial(username, username.IsValidEmail());

            var user = _userRepository.SelectFirstOrDefaultAsync(spec, u => _mapper.Map<UserViewModel>(u), false);

            return user;
        }

        public async Task<UserViewModel> SignInAsync(string username, string password)
        {
            var users = await _userRepository.GetAsync(new UserSpecial(username, username.IsValidEmail()), false);

            var user = users?.FirstOrDefault(u => PasswordHasher.VerifyHashPassword(password, u.Password, u.Salt));

            if (user != null)
            {
                return _mapper.Map<UserViewModel>(user);
            }

            return null;
        }

        public Response<UserClaim> Register(UserViewModel model)
        {
            try
            {
                if (UserExists(model.UserName)) return new FailedResponse<UserClaim>($"User \"{model.UserName}\" already exist in system.");
                var salt = PasswordHasher.SaltedHash();
                var hasPassword = PasswordHasher.HashPassword(model.Password, salt);

                var entity = new UserEntity
                {
                    Password = hasPassword,
                    UserName = model.UserName?.ToLower(),
                    DisplayName = model.DisplayName,
                    Salt = salt,
                    Email = model.Email?.ToLower(),
                    Avatar = model.Avatar,
                    About = model.About,
                    Role = model.Role.ToString()
                };

                var user = _userRepository.Add(entity);
                if (user != null)
                {
                    model.Password = string.Empty;
                    model.Id = user.Id;

                    return new SuccessResponse<UserClaim>();
                }
                return new FailedResponse<UserClaim>("Register failed.");
            }
            catch (Exception)
            {
                return new FailedResponse<UserClaim>("Register failed.");
            }
        }

        public bool UserExists(string username)
        {
            return _userRepository.Any(p => p.UserName.Equals(username));
        }
    }
}