import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { PortalApiService } from '../../portal-api.service';
import { ConnectionNotificationComponent } from '../../../../utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit, AfterViewInit {

  constructor(private portalApi: PortalApiService) { }

  @ViewChild("taskWindowReference") taskWindow: jqxWindowComponent;
  @ViewChild("taskGridReference") taskGrid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @Output() sourceSelected = new EventEmitter<object>();

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.taskGrid.showloadelement();
    this.getData();
  }

  getData(){
    this.portalApi.getTasks()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.taskGrid.updatebounddata();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  rowSelect(event: any){
    this.sourceSelected.emit(event.args.row.bounddata);
    this.taskWindow.close();
    console.log(event);
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
