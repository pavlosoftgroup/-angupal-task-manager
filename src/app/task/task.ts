  export class Task {
    constructor(
        public id: number,
        public title: string = '',
        public parentId: string,
        public timeStart: number,
        public timeFinish: number,
        public developer: string,
        public description: string,
        public  status: boolean = true,

    ){}

}
