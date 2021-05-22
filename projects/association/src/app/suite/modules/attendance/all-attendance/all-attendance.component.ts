import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { AttendanceApiService } from '../attendance-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-all-attendance',
  templateUrl: './all-attendance.component.html',
  styleUrls: ['./all-attendance.component.css']
})
export class AllAttendanceComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private attendanceApi: AttendanceApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Attendance", url: "/suite/attendance/all-attendance" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    // this.attendanceApi.getAttendance()
    //   .subscribe(
    //     res => {
    //       console.log(res);
    //       this.source.localdata = res;
    //       this.grid.updatebounddata();
    //     },
    //     err => {
    //       console.log(err);
    //       this.connectionNotification.errorNotification.open();
    //     }
    //   )
  }

  viewAttendance(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('attendance_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/attendance/view-attendance');
  }


  // widgets
  // ---------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'attendance_code', type: 'string' },
      { name: 'attendance_name', type: 'string' },
      { name: 'year', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Attendance ID", dataField: "attendance_code", width: "20%" },
    { text: "Attendance Name", dataField: "attendance_name", width: "60%" },
    { text: "Year", dataField: "year", width: "20%" },
  ];

}
