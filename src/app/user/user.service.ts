import {Injectable} from "@angular/core";
import {User} from "./user";
import {Http} from "@angular/http";
// import {Observable} from 'rxjs/observable';

const user: User =  {
    id: 1,
    name: 'pavlo',
    mail: 'mail@mail.com',
    img: 'aaa56',
    types: 'administrator',
    time: 12586896,
    status: true,
    userData: '111',
    password: '234'
};




@Injectable()
export class UserService{
    user : User = user;

    constructor(
        private http: Http,
    ){}


}
