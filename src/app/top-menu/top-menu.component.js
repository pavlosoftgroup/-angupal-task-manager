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
var TopMenuComponent = (function () {
    function TopMenuComponent() {
        this.pages = [
            { name: 'Home', link: 'home' },
            { name: 'Task', link: 'task-list' },
        ];
    }
    TopMenuComponent.prototype.ngOnInit = function () {
    };
    return TopMenuComponent;
}());
TopMenuComponent = __decorate([
    core_1.Component({
        selector: 'app-top-menu',
        templateUrl: './top-menu.component.html',
        styleUrls: ['./top-menu.component.css']
    }),
    __metadata("design:paramtypes", [])
], TopMenuComponent);
exports.TopMenuComponent = TopMenuComponent;
//# sourceMappingURL=top-menu.component.js.map