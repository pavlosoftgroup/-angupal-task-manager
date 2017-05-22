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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var taskes = [
    { id: 134,
        title: 'Task 1',
        parentId: 'pavlo',
        timeStart: 123,
        timeFinish: 128,
        developer: 'administrator',
        status: true,
        description: 'Lorem ipsum' },
    { id: 134,
        title: 'Task 2',
        parentId: 'pavlo',
        timeStart: 123,
        timeFinish: 128,
        developer: 'administrator',
        status: true,
        description: ' Universal, the project that allows developers to run Angular on a server, is now up to date with Angular again, and this is the first release since Universal, originally a community-driven project, was adopted by the Angular team. This release now includes the results of the internal and external work from the Universal team over the last few months. The majority of the Universal code is now located in @angular/platform-server. '
    }
];
// let toPromise = Promise.resolve(taskes);
var TaskService = (function () {
    function TaskService(http) {
        this.http = http;
        this.taskes = taskes;
    }
    TaskService.prototype.getAllTask = function () {
        return this.taskes;
    };
    TaskService.prototype.getAllTasks = function () {
        return this.http.get('http://localhost:3000/user/15')
            .map(function (res) { return res.json(); });
        // // //...errors if any
        //     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    };
    TaskService.prototype.getTserReq = function () {
        return this.http.get('user/8')
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    TaskService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return TaskService;
}());
TaskService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map