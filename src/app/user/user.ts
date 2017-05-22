export class User {
    constructor(
        public id: number,
        public name: string = '',
        public mail: string = '',
        public img: string = '',
        public types: any = '',
        public time: number = 10000,
        public  status: boolean = true,
        public userData: string = '',
        public password: string = '',) {};


}