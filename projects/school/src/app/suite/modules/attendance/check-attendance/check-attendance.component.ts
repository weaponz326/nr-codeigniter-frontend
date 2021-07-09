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
  @ViewChild('dateReference') today: jqxDateTimeInputComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Attendance", url: "/suite/attendance/all-attendance" },
    { text: "View Attendance", url: "/suite/attendance/view-attendance" },
    { text: "Check Attendance", url: "/suite/attendance/check-attendance" },
  ];

  allSheetsData: any = [];
  sheetLocalData: any = [];
  sheetDataFields: any = [];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getSingleAttendance();
    this.getStudentsData();
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

  getStudentsData(){
    this.attendanceApi.getAttendanceStudents()
      .subscribe(
        res => {
          console.log(res);
          this.setStudentData(res);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  getChecksData(){
    this.attendanceApi.getAttendanceChecks()
      .subscribe(
        res => {
          console.log(res);
          this.setChecksData(res);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveCheck(day){
    let checkData = {};
    let checkId = null;
    this.allSheetsData.forEach((sheet, i) => {
      if(day in sheet){
        checkId = sheet.check_id;
        checkData = {
          check: sheet.check,
          time_in: sheet.time_in,
          time_out: sheet.time_out
        };
      }
    });

    this.loadingSpinner.httpLoader.open();
    this.attendanceApi.putAttendanceCheck(checkData, checkId)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
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
      { name: 'time_in', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Student ID", dataField: "student_code", editable: false, width: "20%" },
    { text: "Student Name", dataField: "student_name", editable: false, width: "40%" },
    { text: "Check", dataField: "check", editable: true, columntype: "checkbox", width: "20%" },
    {
      text: "Time In", dataField: "time_in", editable: "true", width: "20%", columntype: "datetimeinput",
      createeditor: function (row, value, editor) {
        editor.jqxDateTimeInput({ width: 100, formatString: "'hh:mm:ss'", showTimeButton: true, showCalendarButton: false });
      }
    },
  ];

  setStudentData(sheetData){
    sheetData.forEach(sheet => {
      let data = { id: sheet.id, student_name: sheet.student.student_name, student_code: sheet.student.student_code };

      this.sheetLocalData.push(data);
      console.log(data);
    });

    console.log(this.sheetLocalData);
    this.source.localdata = this.sheetLocalData;
    this.grid.updatebounddata();

    this.getChecksData();
  }

  setChecksData(checksData){
    this.sheetLocalData.forEach((sheet, i) => {
      checksData.forEach(check => {
        if (sheet.id == check.attendance_employee){
          let thisCheck = { check_id: check.id, check: check.check, time_in: check.time_in, time_out: check.time_out, day: check.day };
          this.allSheetsData[i] = Object.assign(this.sheetLocalData[i], thisCheck);
        }
      });
    });

    console.log(this.allSheetsData);

    this.setCurrentChecks(this.today.val());
  }

  setCurrentChecks(currentDate){
    this.allSheetsData.forEach((sheet, i) => {
      if(currentDate in sheet){
        let thisCheck = {check: sheet.check, time_in: sheet.time_in, time_out: sheet.time_out}
        this.sheetLocalData[i] = Object.assign(this.sheetLocalData[i], thisCheck);
      }
    });

    console.log(this.sheetLocalData);
    this.source.localdata = this.sheetLocalData;
    this.grid.updatebounddata();
  }

  gotoNewDay(event){
    console.log(event);

    // this.setCurrentChecks(event.args.oldValue);
    // this.setCurrentChecks(event.args.newValue);
    // this.saveCheck(event.args.oldValue);
  }

}
