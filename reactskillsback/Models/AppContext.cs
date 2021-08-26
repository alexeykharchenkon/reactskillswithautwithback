using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace reactskillsback.Models
{
    public class AppContext: DbContext
    {
        public AppContext(DbContextOptions<AppContext> options)
          : base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Item> Items { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(new User[] {
                new User { Id = 1, Name = "Oleksii" }
                }
            );

            modelBuilder.Entity<Item>().HasData(new Item[] {
                new Item { Id = 1, Title = "Title 1", Text = "Text 1", IsChecked = false },
                new Item { Id = 2, Title = "Title 2", Text = "Text 2", IsChecked = false },
                new Item { Id = 3, Title = "Title 3", Text = "Text 3", IsChecked = false },
                }
          );
        }
    }
}
