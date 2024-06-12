import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './NeelsComponent/todos/todos.component';
import { TodoItemComponent } from './NeelsComponent/todo-item/todo-item.component';
import { AddTodoItemComponent } from './NeelsComponent/add-todo-item/add-todo-item.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './NeelsComponent/home/home.component';
import { Guid } from "guid-typescript";
import { ToDoServiceService } from './Service/to-do-service.service';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoItemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [ToDoServiceService,provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
