import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { LeaveApiService } from '../leave-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { LeaveFormComponent } from '../leave-form/leave-form.component'


@Component({
  selector: 'app-add-leave',
  templateUrl: './add-leave.component.html',
  styleUrls: ['./add-leave.component.css']
})
export class AddLeaveComponent implements OnInit {

  constructor(
    private router: Router,
    private leaveApi: LeaveApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('leaveFormComponentReference') leaveForm: LeaveFormComponent;

  navHeading: any[] = [
    { text: "Add Leave", url: "/suite/leave/add-leave" },
  ];

  employeeIdStore: any;

  ngOnInit(): void {
  }

  saveLeave(){
    console.log('u are saving a new leave');
    this.loadingSpinner.httpLoader.open();

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

    console.log(leaveData);

    this.leaveApi.postLeave(leaveData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.status == true){
            sessionStorage.setItem('leave_id', res.leave_id);
            this.router.navigateByUrl('/suite/leave/view-leave');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

}
