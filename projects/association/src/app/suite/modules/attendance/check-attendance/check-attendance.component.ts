import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
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
    this.getMembersData();
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

  getMembersData(){
    this.attendanceApi.getAttendanceMembers()
      .subscribe(
        res => {
          console.log(res);
          this.setMemberData(res);
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
    this.allSheetsData.forEach((sheet) => {
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
      { name: 'id', type: 'string' },
      { name: 'member_id', type: 'string' },
      { name: 'member_name', type: 'string' },
      { name: 'member_code', type: 'string' },
      { name: 'check', type: 'string' },
      { name: 'time_in', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Member ID", dataField: "member_code", editable: false, width: "20%" },
    { text: "Member Name", dataField: "member_name", editable: false, width: "40%" },
    { text: "Check", dataField: "check", editable: true, columntype: "checkbox", width: "20%" },
    {
      text: "Time In", dataField: "time_in", editable: "true", width: "20%", columntype: "datetimeinput",
      createeditor: function (row, value, editor) {
        editor.jqxDateTimeInput({ width: "20%", formatString: "'hh:mm:ss'", showTimeButton: true, showCalendarButton: false });
      }
    },
  ];

  setMemberData(sheetData){
    sheetData.forEach(sheet => {
      let data = { id: sheet.id, member_name: sheet.member.member_name, member_code: sheet.member.member_code };
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
        if (sheet.id == check.attendance_member){
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
    let oldValue = event.args.oldValue.getFullYear() + '-' + ('0'+(event.args.oldValue.getMonth()+1)).slice(-2) + ' ' + ('0'+(event.args.oldValue.getDate())).slice(-2);
    let newValue = event.args.newValue.getFullYear() + '-' + ('0'+(event.args.newValue.getMonth()+1)).slice(-2) + ' ' + ('0'+(event.args.newValue.getDate())).slice(-2);

    this.setCurrentChecks(oldValue);
    this.setCurrentChecks(newValue);
    this.saveCheck(oldValue);
  }

}
