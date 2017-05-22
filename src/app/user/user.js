"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User(id, name, mail, img, types, time, status, userData, password) {
        if (name === void 0) { name = ''; }
        if (mail === void 0) { mail = ''; }
        if (img === void 0) { img = ''; }
        if (types === void 0) { types = ''; }
        if (time === void 0) { time = 10000; }
        if (status === void 0) { status = true; }
        if (userData === void 0) { userData = ''; }
        if (password === void 0) { password = ''; }
        this.id = id;
        this.name = name;
        this.mail = mail;
        this.img = img;
        this.types = types;
        this.time = time;
        this.status = status;
        this.userData = userData;
        this.password = password;
    }
    ;
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map