using System;
using System.Threading.Tasks;
using Data;
using Data.Entities.Users;

namespace Handlers.Users
{
    public static class UserCreateHandler
    {
        public static async Task<User> Execute(PostgresContext db, UserCreate command)
        {
            var id = Guid.NewGuid();

            var userCreate = await db.Users.AddAsync(
                new User(id, command.Login, command.Password, command.Role));

            await db.SaveChangesAsync();

            return userCreate.Entity;
        }
    }
}