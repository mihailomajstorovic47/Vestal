using Microsoft.EntityFrameworkCore;

namespace Vestal.Core.API.Model
{
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options)  : base(options)
        {
        }
        public DbSet<Location> Location { get; set; }
        public DbSet<Property> Property { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            var connectionString = configuration.GetConnectionString("AppDB");
            optionsBuilder.UseNpgsql(connectionString);
        }

    }
}
