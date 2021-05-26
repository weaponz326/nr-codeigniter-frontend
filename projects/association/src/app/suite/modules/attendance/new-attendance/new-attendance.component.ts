import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

import { AttendanceApiService } from '../attendance-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-new-attendance',
  templateUrl: './new-attendance.component.html',
  styleUrls: ['./new-attendance.component.css']
})
export class NewAttendanceComponent implements OnInit {

  constructor(
    private router: Router,
    private attendanceApi: AttendanceApiService,
  ) { }

  @ViewChild("newAttendanceReference") newAttendance: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild('attendanceCodeReference') attendanceCode: jqxInputComponent;
  @ViewChild('attendanceNameReference') attendanceName: jqxInputComponent;
  @ViewChild('yearReference') year: jqxDropDownListComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  yearSource = this.getYears();

  ngOnInit(): void {
  }

  openWindow(){
    this.newAttendance.open();
  }

  closeWindow(){
    this.newAttendance.close();
  }

  saveAttendance(){
    this.loadingSpinner.httpLoader.open();

    let AttendanceData = {
      account: sessionStorage.getItem('association_id'),
      attendance_code: this.attendanceCode.val(),
      attendance_name: this.attendanceName.val(),
      year: this.year.val(),
    }

    this.attendanceApi.postAttendance(AttendanceData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.message == "OK"){
            sessionStorage.setItem('attendance_id', res.data.id);
            this.closeWindow();
            this.router.navigateByUrl('/suite/attendance/view-attendance');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(AttendanceData);
  }

  getYears(): any[] {
    var i, n=[];
    for (i=1900; i<=2021; i++) n.push(i);
    return n;
  }

}
