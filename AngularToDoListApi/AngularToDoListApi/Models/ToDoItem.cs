using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace AngularToDoListApi.Models
{
    public class ToDoItem
    {
        public Guid Id { get; set; }
        public string? task { get; set; }
        public string? desc { get; set; }
    }
}
