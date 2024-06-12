import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './NeelsComponent/todos/todos.component';
import { HomeComponent } from './NeelsComponent/home/home.component';
import { AddTodoItemComponent } from './NeelsComponent/add-todo-item/add-todo-item.component';

const routes: Routes = [
  {
    path: '',
    component:TodosComponent
  },
  {
    path:'showItems',
    component:TodosComponent
  },
  {
    path:'AddItems',
    component:AddTodoItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
