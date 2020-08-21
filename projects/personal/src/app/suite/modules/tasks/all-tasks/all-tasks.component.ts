import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { TasksApiService } from '../tasks-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';


@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.css']
})
export class AllTasksComponent implements OnInit, AfterViewInit {

  @ViewChild("gridReference") grid: jqxGridComponent;

  constructor(private tasksApi: TasksApiService, public suiteRoutes: SuiteRoutesService) { }

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
      { name: 'task_name', type: 'string' },
      { name: 'priority', type: 'string' },
      { name: 'progress', type: 'string' },
    ],
    id: 'id',
 };

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Task Name", dataField: "task_name", width: "50%" },
    { text: "Priority", dataField: "priority", width: "25%" },
    { text: "Progress", dataField: "progress", width: "25%" },
  ];

}
