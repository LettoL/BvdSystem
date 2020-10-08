using System;

namespace Data.Entities.Users
{
    public class User : Entity
    {
        public string Login { get; set; }

        public string Password { get; set; }

        public UserRole Role { get; set; }

        public User(Guid id, string login, string password, UserRole role) =>
            (Id, Login, Password, Role) = (id, login, password, role);
    }

    public enum UserRole
    {
        Admin = 10,
        
        Manager = 20
    }
}