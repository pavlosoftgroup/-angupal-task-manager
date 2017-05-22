import {Component, OnInit} from "@angular/core";
import {TaskService} from "./task.service";
import {Router} from "@angular/router";
import {Task} from "./task";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  taskes: Task[];
  responce: any;
  errorMessage: string = 'ERROR';


  constructor(private taskService: TaskService,
             // private activateRoute: ActivatedRoute,
              private router: Router,) {}

  ngOnInit() {
    this.getTasks();

  }


  taskDetal(id: number) {
    this.router.navigate(['task',id]);

  }


  private getTasks() {
    this.taskService.getAllTask().subscribe(
      tasks => this.taskes = tasks
    );


  }

}
