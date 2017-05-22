"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task = (function () {
    function Task(id, title, parentId, timeStart, timeFinish, developer, description, status) {
        if (title === void 0) { title = ''; }
        this.id = id;
        this.title = title;
        this.parentId = parentId;
        this.timeStart = timeStart;
        this.timeFinish = timeFinish;
        this.developer = developer;
        this.description = description;
        this.status = status;
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=task.js.map