import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { Todo } from '../../Todo';
import { Guid } from 'guid-typescript';
import { ToDoServiceService } from '../../Service/to-do-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrl: './add-todo-item.component.css'
})
export class AddTodoItemComponent implements OnInit {
  todo: Todo={
    task:'',
    desc:''
  };
  constructor (private toDoService:ToDoServiceService, private router:Router){}

  ngOnInit(): void {

  }

  // @Output() toDoAdd: EventEmitter<Todo> = new EventEmitter();
  // onSubmit() {
  //   this.todo.Id=Guid.create()
  // this.toDoAdd.emit(this.todo)
  // }
  addTodo() {

    console.log(this.todo.task)
    this.toDoService.AddToDoItems(this.todo)
    .subscribe({
      next: (todo)=>{
        console.log("inside next",todo)
        this.router.navigate(['showItems']);
      },
      error: (response)=>{
        console.log(response);
      }
    })
    console.log("AddToDoItems URL Called");
    }
}
