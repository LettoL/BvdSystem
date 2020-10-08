using Data.Entities.Users;

namespace Handlers.Users
{
    public class UserCreate
    {
        public string Login { get; set; }
        public string Password { get; set; }
        public UserRole Role { get; set; }
    }
}