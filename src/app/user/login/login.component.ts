import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'login-app',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent  {
    currentUser: boolean = false;
    login: string;
    pass: string;


}
