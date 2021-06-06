import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks-wrapper',
  templateUrl: './tasks-wrapper.component.html',
  styleUrls: ['./tasks-wrapper.component.css']
})
export class TasksWrapperComponent implements OnInit {

  constructor() { }

  navLinks: any[] = [
    // { text: "Kanban View", url: "/suite/tasks/kanban-view", icon: "fa fa-fw fa-eye" },
    { text: "All Tasks", url: "/suite/tasks/all-tasks", icon: "fa fa-fw fa-list" }
  ]

  ngOnInit(): void {
  }

}
