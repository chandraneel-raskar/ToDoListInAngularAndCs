using AngularToDoListApi.Models;
using Microsoft.EntityFrameworkCore;

namespace AngularToDoListApi.Data
{
    public class ToDoItemDbContext: DbContext
    {
        public ToDoItemDbContext() { }
        public ToDoItemDbContext(DbContextOptions options) : base(options) { }

        public DbSet<ToDoItem> ToDoDbSet { get; set; }

    }
}
