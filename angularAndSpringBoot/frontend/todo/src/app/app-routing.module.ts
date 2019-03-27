import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGaurdService } from './service/route-gaurd.service';
import { TodoComponent } from './todo/todo.component';

//welcome
const routes: Routes = [

  
  {path: '', component: LoginComponent},  //Can specify conditions as to when these can be activated (RouteGaurdService)
  {path: 'login', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGaurdService]},
  {path: 'todos', component: ListTodosComponent, canActivate:[RouteGaurdService]},
  {path: 'logout', component: LogoutComponent, canActivate:[RouteGaurdService]},
  {path: 'todos/:id', component: TodoComponent, canActivate:[RouteGaurdService]},
  {path: '**', component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
