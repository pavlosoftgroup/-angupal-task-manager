"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var material_1 = require("@angular/material");
var animations_1 = require("@angular/platform-browser/animations");
var top_menu_component_1 = require("./top-menu/top-menu.component");
// import {RouterModule} from "@angular/router";
var top_menu_routing_1 = require("./top-menu/top-menu.routing");
var task_component_1 = require("./task/task.component");
var error_page_component_1 = require("./error-page/error-page.component");
var login_component_1 = require("./user/login/login.component");
var register_component_1 = require("./user/register/register.component");
var user_service_1 = require("./user/user.service");
var task_service_1 = require("./task/task.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            top_menu_component_1.TopMenuComponent,
            task_component_1.TaskComponent,
            error_page_component_1.ErrorPageComponent,
            login_component_1.LoginComponent,
            register_component_1.RegisterComponent,
        ],
        imports: [
            top_menu_routing_1.appRoutes,
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            material_1.MdToolbarModule,
            material_1.MdButtonModule,
            material_1.MdIconModule,
            material_1.MdMenuModule,
            material_1.MdToolbarModule,
            material_1.MdMenuModule,
            material_1.MdChipsModule,
            material_1.MdInputModule,
            material_1.MdTabsModule,
            material_1.MdListModule,
        ],
        providers: [
            user_service_1.UserService,
            task_service_1.TaskService,
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map