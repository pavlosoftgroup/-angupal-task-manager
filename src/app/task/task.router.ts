import {TaskPageComponent} from "./task-page/task-page.component";
import {Routes} from "@angular/router";


export const ROUTES: Routes =[
  {path: 'task/:id', component: TaskPageComponent},

];
