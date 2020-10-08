using Data.Entities.Users;
using Microsoft.EntityFrameworkCore;

namespace Data
{
    public class PostgresContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("connect");
        }
    }
}