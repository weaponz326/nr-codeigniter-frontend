import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { AttendanceApiService } from '../attendance-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';


@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.css']
})
export class ViewAttendanceComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private attendanceApi: AttendanceApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('attendanceCodeReference') attendanceCode: jqxInputComponent;
  @ViewChild('attendanceNameReference') attendanceName: jqxInputComponent;
  @ViewChild('yearReference') year: jqxInputComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  navHeading: any[] = [
    { text: "All Attendance", url: "/suite/attendance/all-attendance" },
    { text: "View Attendance", url: "/suite/attendance/view-attendance" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.attendanceApi.getSingleAttendance()
      .subscribe(
        res => {
          console.log(res);
          this.attendanceCode.val(res.attendance_code);
          this.attendanceName.val(res.year);
          this.year.val(res.attendance_type);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveAttendance(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a attendance");

    var attendanceData = {
      account: sessionStorage.getItem('association_id'),
      attendance_code: this.attendanceCode.val(),
      attendance_name: this.attendanceName.val(),
      year: this.year.val(),
    }

    this.attendanceApi.putAttendance(attendanceData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(attendanceData);
  }

  deleteAttendance(){
    console.log("dude... u are gonna delete the attendance?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      // this.attendanceApi.deleteAttendance()
      //   .subscribe(
      //     res => {
      //       console.log(res);
      //       this.loadingSpinner.httpLoader.close();

      //       this.router.navigateByUrl('/suite/attendance/all-attendance');
      //     },
      //     err => {
      //       console.log(err);
      //       this.loadingSpinner.httpLoader.close();
      //       this.connectionNotification.errorNotification.open();
      //     }
      //   )
    }
  }

}
