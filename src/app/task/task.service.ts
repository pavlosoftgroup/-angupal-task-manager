import {Injectable} from "@angular/core";
import {Task} from "./task";
import {Http, Jsonp, Response} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Observable} from "rxjs/Rx";


@Injectable()
export class TaskService {
  private link: string = 'http://localhost:3000/task/';
  private link2: string = 'http://localhost:3000/tasks';
  result: any[];
  // taskes: Task[] = [];

  constructor(private http: Http, private jsonp: Jsonp) {
  }

  getAllTask(): Observable<Task[]> {
    return this.http.get(this.link2).map(this.extractData);


  }

  getTask(id: number): Observable<Task> {
    return this.http.get(this.link + id)
      .map(this.extractTask);
  }

  private extractTask(response: Response) {

    const res = response.json();
    const task: Task = new Task(
      res.id,
      res.title,
      res.parentId,
      res.timeStart,
      res.timeFinish,
      res.developer,
      res.description,
      res.status,
    );
    return task;
  }


  private extractData(response: Response) {
    const res = response.json();
    let tasks: Task[] = [];
    for (let i = 0; i < res.length; i++) {
      tasks.push(
        new Task(
          res[i].id,
          res[i].title,
          res[i].parentId,
          res[i].timeStart,
          res[i].timeFinish,
          res[i].developer,
          res[i].description,
          res[i].status,
        )
      );

    }
    return tasks;
  }





}
