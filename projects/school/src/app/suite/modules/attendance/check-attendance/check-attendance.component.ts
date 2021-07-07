import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxGridComponent } from 'jqwidgets-ng/jqxGrid';

import { AttendanceApiService } from '../attendance-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-check-attendance',
  templateUrl: './check-attendance.component.html',
  styleUrls: ['./check-attendance.component.css']
})
export class CheckAttendanceComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private attendanceApi: AttendanceApiService,
  ) { }

  @ViewChild('attendanceCodeReference') attendanceCode: jqxInputComponent;
  @ViewChild('attendanceNameReference') attendanceName: jqxInputComponent;
  @ViewChild('dateReference') button: jqxDateTimeInputComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Attendance", url: "/suite/attendance/all-attendance" },
    { text: "View Attendance", url: "/suite/attendance/view-attendance" },
    { text: "Check Attendance", url: "/suite/attendance/check-attendance" },
  ];

  sheetLocalData: any = [];
  sheetDataFields: any = [];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getSingleAttendance();
    this.getSheetData();
  }

  getSingleAttendance(){
    this.attendanceApi.getSingleAttendance()
      .subscribe(
        res => {
          console.log(res);
          this.attendanceCode.val(res.attendance_code);
          this.attendanceName.val(res.attendance_name);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  getSheetData(){
    this.attendanceApi.getClassSheet()
      .subscribe(
        res => {
          console.log(res);
          this.populateSheetData(res);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  // widgets
  // ------------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'student_id', type: 'string' },
      { name: 'student_name', type: 'string' },
      { name: 'student_code', type: 'string' },
      { name: 'check', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Student ID", dataField: "student_code", editable: false, width: "25%" },
    { text: "Student Name", dataField: "student_name", editable: false, width: "55%" },
    { text: "Check", dataField: "check", editable: true, columntype: "checkbox", width: "20%" },
  ];

  populateSheetData(sheetData){
    sheetData.forEach(sheet => {
      let data = { student_id: sheet.student.id, student_name: sheet.student.student_name, student_code: sheet.student.student_code };

      var sheetChecks = Object.entries(sheet.checks);
      sheetChecks.forEach(check => {
        data[check[0]] = check[1];
      });

      this.sheetLocalData.push(data);
      console.log(data);
    });

    console.log(this.sheetLocalData);
    this.source.localdata = this.sheetLocalData;
    this.grid.updatebounddata();
  }

  // TODO: cannot day's attendance or checked attendance

  // set the checks for the selected date
  setSelectDay(date){
    // check if day exists in checks object
    if('date' in this.sheetLocalData.checks){
      // if exists load checks for all students

    }
    // else set null for all students
  }

}
