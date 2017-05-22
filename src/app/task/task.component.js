"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var task_service_1 = require("./task.service");
var router_1 = require("@angular/router");
var TaskComponent = (function () {
    function TaskComponent(taskService, activateRoute) {
        this.taskService = taskService;
        this.activateRoute = activateRoute;
        this.taskes = [];
    }
    TaskComponent.prototype.ngOnInit = function () {
        // this.taskes = this.taskService.getAllTask();
        this.resp = this.taskService.getAllTasks();
        console.log(this.resp);
    };
    return TaskComponent;
}());
TaskComponent = __decorate([
    core_1.Component({
        selector: 'app-task',
        templateUrl: './task.component.html',
        styleUrls: ['./task.component.css']
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService,
        router_1.ActivatedRoute])
], TaskComponent);
exports.TaskComponent = TaskComponent;
//# sourceMappingURL=task.component.js.map