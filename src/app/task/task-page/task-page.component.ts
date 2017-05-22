import {Component, OnInit} from "@angular/core";
import {TaskService} from "../task.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {
  task: any = '';
  id: number;

  constructor(private taskService: TaskService,
              private activatedRoute: ActivatedRoute,
              private router: Router,

  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.forEach((params: Params) => {
      this.id = +params['id']; // конвертируем значение параметра id в тип number
      this.taskService
        .getTask(this.id)  // обращаемся к сервису и запрашиваем фразу по id. Получаем Promise
        .subscribe(result => this.task = result);  // как только Promise перейдет в состояние resolved присваиваем его значение свойству phrase
    });

  };

  goEditTask(){
    this.router.navigate(['task', this.id, 'edit' ]);



  }

}
