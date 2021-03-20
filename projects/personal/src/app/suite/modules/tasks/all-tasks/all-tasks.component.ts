import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { TasksApiService } from '../tasks-api.service';


@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit, AfterViewInit {

  constructor(private tasksApi: TasksApiService) { }

  @ViewChild("gridReference") grid: jqxGridComponent;
  @ViewChild("buttonReference") button: jqxButtonComponent;

  navHeading: any[] = [
    { text: "All Tasks", url: "/suite/tasks/all-tasks" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.tasksApi.getTasks()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.grid.updatebounddata();
        },
        err => {
          console.log(err);
        }
      )
  }

  // widgets
  // ---------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'date_added', type: 'string' },
      { name: 'task_name', type: 'string' },
      { name: 'priority', type: 'string' },
      { name: 'progress', type: 'string' },
      { name: 'visibility', type: 'string' },
    ],
    id: 'id',
 };

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Date Added", dataField: "date_added", filterType: "range", width: "18%" },
    { text: "Task Name", dataField: "task_name", width: "37%" },
    { text: "Priority", dataField: "priority", width: "15%" },
    { text: "Progress", dataField: "progress", width: "15%" },
    { text: "Visibility", dataField: "visibility", width: "15%" },
  ];

}
