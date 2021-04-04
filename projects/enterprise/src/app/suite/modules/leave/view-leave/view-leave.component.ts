import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { LeaveApiService } from '../leave-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { LeaveFormComponent } from '../leave-form/leave-form.component'


@Component({
  selector: 'app-view-leave',
  templateUrl: './view-leave.component.html',
  styleUrls: ['./view-leave.component.css']
})
export class ViewLeaveComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private leaveApi: LeaveApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('leaveFormComponentReference') leaveForm: LeaveFormComponent;

  navHeading: any[] = [
    { text: "All Leave", url: "/suite/leave/all-leave" },
    { text: "View Leave", url: "/suite/leave/view-leave" },
  ];

  employeeIdStore: any;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.leaveApi.getSingleLeave()
      .subscribe(
        res => {
          console.log(res);
          this.leaveForm.leaveCode.val(res.leave_code);
          this.leaveForm.employeeName.val(res.employee.employee_name);
          this.leaveForm.employeeCode.val(res.employee.employee_code);
          this.leaveForm.dateRequested.val(res.date_requested);
          this.leaveForm.fromDate.val(res.from_date);
          this.leaveForm.toDate.val(res.to_date);
          this.leaveForm.duration.val(res.duration);
          this.leaveForm.leaveType.val(res.leave_type);
          this.leaveForm.reason.val(res.reason);
          this.leaveForm.leaveStatus.val(res.status);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveLeave(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a leave");

    var leaveData = {
      enterprise_id: sessionStorage.getItem('enterprise_id'),
      leave_code: this.leaveForm.leaveCode.val(),
      employee_id: this.employeeIdStore,
      date_requested: this.leaveForm.dateRequested.val(),
      leave_type: this.leaveForm.leaveType.val(),
      from_date: this.leaveForm.fromDate.val(),
      to_date: this.leaveForm.toDate.val(),
      duration: this.leaveForm.duration.val(),
      reason: this.leaveForm.reason.val(),
      status: this.leaveForm.leaveStatus.val(),
    }

    this.leaveApi.putLeave(leaveData)
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

    console.log(leaveData);
  }

  deleteLeave(){
    console.log("dude... u are gonna delete the leave?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.leaveApi.deleteLeave()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/leave/all-leave');
          },
          err => {
            console.log(err);
            this.loadingSpinner.httpLoader.close();
            this.connectionNotification.errorNotification.open();
          }
        )
    }
  }

}
