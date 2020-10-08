using System;
using System.Threading.Tasks;
using Data;
using Data.Entities.Users;
using Microsoft.EntityFrameworkCore;

namespace Handlers.Auth
{
    public static class SignInHandler
    {
        public static async Task<User> Execute(PostgresContext db, string login, string password)
        {
            var user = await db.Users
                .FirstOrDefaultAsync(x => x.Login == login && x.Password == password);
            
            if(user == null)
                throw new Exception("Неверные логин или пароль");

            return user;
        }
    }
}