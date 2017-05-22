import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {TaskComponent} from "../task/task.component";
import {ErrorPageComponent} from "../error-page/error-page.component";
import {LoginComponent} from "../user/login/login.component";
import {RegisterComponent} from "../user/register/register.component";
import {TaskPageComponent} from "../task/task-page/task-page.component";
import {TaskEditformComponent} from "../task/task-editform/task-editform.component";


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'task-list', component: TaskComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login',   component: LoginComponent},
  {path: 'task/add', component: TaskEditformComponent},
  {path: 'task/:id', component: TaskPageComponent},
  {path: 'task/:id/edit', component: TaskEditformComponent},



  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {
}
