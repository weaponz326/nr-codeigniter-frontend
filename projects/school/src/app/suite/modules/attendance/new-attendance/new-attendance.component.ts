import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';

import { AttendanceApiService } from '../attendance-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { SelectTermComponent } from '../select-term/select-term.component'
import { SelectClassComponent } from '../select-class/select-class.component'


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
  @ViewChild('termReference') term: jqxInputComponent;
  @ViewChild('sourceReference') source: jqxInputComponent;
  @ViewChild('fromDateReference') fromDate: jqxDateTimeInputComponent;
  @ViewChild('toDateReference') toDate: jqxDateTimeInputComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild("selectTermComponentReference") selectTerm: SelectTermComponent;
  @ViewChild("selectClassComponentReference") selectClass: SelectClassComponent;

  termIdStore: any;
  classIdStore: any;

  ngOnInit(): void {
  }

  openWindow(){
    this.newAttendance.open();
  }

  closeWindow(){
    this.newAttendance.close();
  }

  termSelected(term: any){
    console.log(term);
    this.term.val(term.term_name);
    this.termIdStore = term.id;
  }

  classSelected(clas: any){
    console.log(clas);
    this.source.val(clas.class_name);
    this.classIdStore = clas.id;
  }

  saveAttendance(){
    this.loadingSpinner.httpLoader.open();

    let AttendanceData = {
      account: sessionStorage.getItem('school_id'),
      attendance_code: this.attendanceCode.val(),
      attendance_name: this.attendanceName.val(),
      from_date: this.fromDate.val(),
      to_date: this.toDate.val(),
      term: this.termIdStore,
      source: this.classIdStore,
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

}
