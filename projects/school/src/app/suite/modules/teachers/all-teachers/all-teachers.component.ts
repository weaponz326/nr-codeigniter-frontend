import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { TeachersApiService } from '../teachers-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-teachers',
  templateUrl: './all-teachers.component.html',
  styleUrls: ['./all-teachers.component.css']
})
export class AllTeachersComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private teachersApi: TeachersApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Teachers", url: "/suite/teachers/all-teachers" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.teachersApi.getTeachers()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.grid.updatebounddata();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  viewTeacher(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('teacher_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/teachers/view-teacher');
  }

  // widgets
  // -------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'teacher_code', type: 'string' },
      { name: 'teacher_name', type: 'string' },
      { name: 'department', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Teacher ID", dataField: "teacher_code", width: "20%" },
    { text: "Teacher Name", dataField: "teacher_name", width: "50%" },
    { text: "Department", dataField: "department", width: "30%" },
  ];

}
