import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

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
  @ViewChild('termReference') term: jqxDropDownListComponent;
  @ViewChild('sourceReference') source: jqxInputComponent;

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
      school: localStorage.getItem('school_id'),
      attendance_code: this.attendanceCode.val(),
      attendance_name: this.attendanceName.val(),
      term: this.termIdStore,
      source: this.classIdStore,
    }

    this.attendanceApi.postAttendance(AttendanceData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.status == true){
            sessionStorage.setItem('lab_id', res.lab_id);
            this.router.navigateByUrl('/suite/Attendance/view-Attendance');
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
