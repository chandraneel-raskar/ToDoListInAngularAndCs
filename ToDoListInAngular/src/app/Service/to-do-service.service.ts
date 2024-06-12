import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../Todo';

@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {

baseApiUrl: string="https://localhost:7146"
  constructor(private http: HttpClient) { console.log("Hello from service")}

  GetToDoItems() : Observable<Todo[]> {
    // var todolist=this.http.get<Todo[]>(this.baseApiUrl+'/api/ToDoList')
    // console.log(todolist)
   return this.http.get<Todo[]>(this.baseApiUrl+'/api/ToDoList')
  }

  AddToDoItems(todo: Todo) {
    return this.http.post<Todo>(this.baseApiUrl+'/api/ToDoList',todo)
  }

  DeleteToDoItems(task: string)
  {
    return this.http.delete<Todo>(this.baseApiUrl+'/api/ToDoList/'+task)
  }
}
