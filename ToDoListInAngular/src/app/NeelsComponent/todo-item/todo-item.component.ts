import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todos : Todo[]
  @Output() todoDelete : EventEmitter<string> = new EventEmitter();
onClick(task: string){
  console.log("onClick triggered");
  this.todoDelete.emit(task);
}
}
