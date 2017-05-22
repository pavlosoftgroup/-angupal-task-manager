import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  pages: Object[] = [
    {name: 'Home', link: 'home'},
    {name: 'Task', link: 'task-list'},
  ];


  constructor() {
  }

  ngOnInit() {
  }

}
