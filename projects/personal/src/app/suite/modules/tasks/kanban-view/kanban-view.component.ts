import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { jqxKanbanComponent } from 'jqwidgets-ng/jqxkanban';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';

import { TasksApiService } from '../tasks-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';

@Component({
  selector: 'app-kanban-view',
  templateUrl: './kanban-view.component.html',
  styleUrls: ['./kanban-view.component.css']
})
export class KanbanViewComponent implements OnInit, AfterViewInit {

  constructor(private tasksApi: TasksApiService, public suiteRoutes: SuiteRoutesService) { }

  @ViewChild('kanbanReference') kanban: jqxKanbanComponent;
  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('fromDateReference') fromDate: jqxDateTimeInputComponent;
  @ViewChild('toDateReference') toDate: jqxDateTimeInputComponent;

  navHeading: any[] = [
    { text: "Kanban View", url: "/suite/tasks/kanban-view" },
  ];

  newItemData: any;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.newItemData = {
      status: 'Doing',
      text: 'This is a test task',
      content: 'This task is automatically generated in AfterViewInit life cycle hook',
      tags: 'Very Urgent'
    }

    console.log(this.newItemData);
    this.kanban.addItem(this.newItemData);
  }

  // inserts task into kanban
  onTaskAdded(taskData: any){
    console.log("u want to add new task");
    console.log(taskData);

    this.newItemData = {
      status: taskData.progress,
      text: taskData.task_name,
      content: taskData.description,
      tags: taskData.priority
    }

    // this.tasksApi.postTask(this.newItemData)
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //       this.kanban.addItem(this.newItemData);
    //     },
    //     err => {
    //       console.log(err);
    //     }
    //   )

    console.log(this.newItemData);
    this.kanban.addItem(this.newItemData);
  }

  // widgets
  // -----------------------------------------------------------------------------------------

  // kanban settings

  fields: any[] = [
		{ name: "id", map: "id", type: "number" },
		{ name: "status", map: "progress", type: "string" },
		{ name: "text", map: "task_name", type: "string" },
		{ name: "tags", map: "priority", type: "string" },
		{ name: "content", map: "description", type: "string" }
  ];

  source: any =
  {
    dataType: "json",
    url: "#",
    dataFields: this.fields,
    id: "id"
  };
  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "To Do", dataField: "To Do" },
    { text: "Doing", dataField: "Doing" },
    { text: "Done", dataField: "Done" }
  ];

}
