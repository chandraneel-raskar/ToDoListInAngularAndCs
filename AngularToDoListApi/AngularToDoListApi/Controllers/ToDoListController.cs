﻿using AngularToDoListApi.Data;
using AngularToDoListApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AngularToDoListApi.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class ToDoListController : Controller
    {
        private readonly ToDoItemDbContext _toDoItemdbContext;
        public ToDoListController(ToDoItemDbContext toDoItemDbContext)
        {
            this._toDoItemdbContext = toDoItemDbContext;
        }


        [HttpGet]
        public async Task<IActionResult> GetAllToDoItems()
        {
            var toDoListItems = await _toDoItemdbContext.ToDoDbSet.ToListAsync();

            return Ok(toDoListItems);
        }

        [HttpPost]
        public async Task<IActionResult> AddToDoListItem([FromBody] ToDoItem toDoItem)
        {
            toDoItem.Id=Guid.NewGuid();
            _toDoItemdbContext.ToDoDbSet.Add(toDoItem);
            await _toDoItemdbContext.SaveChangesAsync();
            return Ok(toDoItem);
        }

        [HttpDelete]
        [Route("{task}")]
        public async Task<IActionResult> DeletleToDoListItem([FromRoute] string task)
        {
            var deleteItem = _toDoItemdbContext.ToDoDbSet.Where(ts=>ts.task==task);
            foreach(var di in deleteItem)
            {
                _toDoItemdbContext.ToDoDbSet.Remove(di);
            }

            await _toDoItemdbContext.SaveChangesAsync();
            return Ok(task);
        }

    }
}
