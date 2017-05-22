import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule, JsonpModule} from "@angular/http";


import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {
  MdButtonModule,
  MdCardModule,
  MdChipsModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdTabsModule,
  MdToolbarModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TopMenuComponent} from "./top-menu/top-menu.component";
import {AppRoutes} from "./top-menu/top-menu.routing";
import {TaskComponent} from "./task/task.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {LoginComponent} from "./user/login/login.component";
import {RegisterComponent} from "./user/register/register.component";
import {UserService} from "./user/user.service";
import {TaskService} from "./task/task.service";
import {TaskPageComponent} from "./task/task-page/task-page.component";
import {TaskEditformComponent} from "./task/task-editform/task-editform.component";
import {ProjectComponent} from "./project/project.component";
// import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopMenuComponent,
    TaskComponent,
    ErrorPageComponent,
    LoginComponent,
    RegisterComponent,
    TaskPageComponent,
    TaskEditformComponent,
    ProjectComponent,
  ],
  imports: [
    AppRoutes,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdMenuModule,
    MdToolbarModule,
    MdMenuModule,
    MdChipsModule,
    MdInputModule,
    MdTabsModule,
    MdListModule,
    JsonpModule,
    MdCardModule,


  ],
  providers: [
    UserService,
    TaskService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
