import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxKanbanComponent } from 'jqwidgets-ng/jqxkanban';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { TasksApiService } from '../tasks-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';

@Component({
  selector: 'app-kanban-view',
  templateUrl: './kanban-view.component.html',
  styleUrls: ['./kanban-view.component.css']
})
export class KanbanViewComponent implements OnInit {

  @ViewChild('kanbanReference') kanban: jqxKanbanComponent;
  @ViewChild('buttonReference') button: jqxButtonComponent;

  newItemData: any;

  constructor(private tasksApi: TasksApiService, public suiteRoutes: SuiteRoutesService) { }

  ngOnInit(): void {
  }

  // inserts task into kanban
  onTaskAdded(taskData: object){
    console.log("u want to add new task");

    // this.newItemData = {
    //   status: taskData.progress,
    //   text: taskData.task_name,
    //   content: taskData.description,
    //   tags: taskData.priority
    // }

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

    this.newItemData = {
      status: "Doing",
      text: "dfjkdfjk jdkfkd fkdjf",
      content: "lsklkdmfl skdmflksdmflksdmflksdmfkls",
      tags: "lkrjkmlk mdslkf"
    }

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
