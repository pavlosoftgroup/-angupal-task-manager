import {Component, OnInit} from "@angular/core";
import {TaskService} from "../task.service";
import {ActivatedRoute, Params} from "@angular/router";

//import {Task} from 'test';

@Component({
  selector: 'app-task-editform',
  templateUrl: './task-editform.component.html',
  styleUrls: ['./task-editform.component.css']
})
export class TaskEditformComponent implements OnInit {
  value: boolean = true;
  id: number;
  public task: any = '';
  public taskData: Promise<void>;
  buttonValue: string;
   private emptyTask = [
     0,
     'Empry Titile',
  '0',
  1000000,
  1000000,
  'anybody',
  'description',
  true];


  constructor(private taskService: TaskService,
              private activatedRoute: ActivatedRoute) {
  }


  ngOnInit() {

    this.taskData = this.activatedRoute.params.forEach((params: Params) => {

      if (params['id'] === 'add') {
        this.value = false;
        return false;



      } else {
        this.id = +params['id'];


        this.taskService.getTask(this.id).subscribe(result => this.task = result);


      }

    });
    console.log(this.taskData);


    console.log(this.value);
    this.buttonValue = this.value ? 'Edit Task' : 'Add Task';
    this.task = (this.task === '') ?   this.emptyTask : this.task;


  }





}
