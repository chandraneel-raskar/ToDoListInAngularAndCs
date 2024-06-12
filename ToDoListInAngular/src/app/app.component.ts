import { Component } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDoListInAngular';
  toDoService: any;
  todos: any;
  constructor(){
    setTimeout(()=>{
      this.title="New Title";
    },3000)
  }

  addTodo(todo: Todo) {
    this.toDoService.AddToDoItems(todo);
    console.log(todo+"AddToDoItems URL Clled")
    this.todos.push(todo)
  }
}
