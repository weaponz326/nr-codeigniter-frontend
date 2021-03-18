import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { SubjectsApiService } from '../subjects-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';

@Component({
  selector: 'app-teachers-table',
  templateUrl: './teachers-table.component.html',
  styleUrls: ['./teachers-table.component.css']
})
export class TeachersTableComponent implements OnInit, AfterViewInit {

  constructor(
    private subjectsApi: SubjectsApiService,
  ) { }

  @ViewChild("teachersGridReference") teachersGrid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.teachersGrid.showloadelement();
    this.getData();
  }

  getData(){
    this.subjectsApi.getTeachers(sessionStorage.getItem('subject_id'))
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.teachersGrid.updatebounddata();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  // widgets
  // --------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'teacher_code', type: 'string' },
      { name: 'teacher_name', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  // grid columns
  columns: any[] = [
    { text: "Teacher ID", dataField: "teacher_code", width: "30%" },
    { text: "Teacher Name", dataField: "teacher_name", width: "70%" },
  ];

}
