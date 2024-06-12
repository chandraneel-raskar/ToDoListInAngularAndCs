import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { ToDoServiceService } from '../../Service/to-do-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{
  todos: Todo[]
constructor (private toDoService:ToDoServiceService, private router:Router){}

ngOnInit(): void {
  this.toDoService.GetToDoItems().subscribe({
    next: (todos)=>this.todos=todos,
    error:(response)=>{
      console.log(response)
    }
  })
}

  deleteTodo(todo: Todo) {
    console.log(todo)
    const index = this.todos.indexOf(todo)
    console.log(index)
    this.todos.splice(index, 1)
  }

}
