import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';

import { AppraisalApiService } from '../appraisal-api.service';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-new-appraisal',
  templateUrl: './new-appraisal.component.html',
  styleUrls: ['./new-appraisal.component.css']
})
export class NewAppraisalComponent implements OnInit {

  constructor(
    private router: Router,
    private appraisalApi: AppraisalApiService,
  ) { }

  @ViewChild("newAppraisalReference") newAppraisal: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("appraisalCodeReference") appraisalCode: jqxInputComponent;
  @ViewChild("employeeNameReference") employeeName: jqxInputComponent;
  @ViewChild("employeeCodeReference") employeeCode: jqxInputComponent;
  @ViewChild("startDateReference") startDate: jqxDateTimeInputComponent;
  @ViewChild("endDateReference") endDate: jqxDateTimeInputComponent;
  @ViewChild("supervisorReference") supervisor: jqxInputComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  employeeIdStore: any;

  ngOnInit(): void {
  }

  openWindow(){
    this.newAppraisal.open();
  }

  saveAppraisal(){
    this.loadingSpinner.httpLoader.open();

    let appraisalData = {
      user: sessionStorage.getItem('enterprise_id'),
      appraisal_name: this.appraisalCode.val(),
      employee_id: this.employeeIdStore,
      start_date: this.startDate.val(),
      end_date: this.endDate.val(),
      supervisor: this.supervisor.val(),
    }

    this.appraisalApi.postAppraisal(appraisalData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.status == true){
            sessionStorage.setItem('appraisal_id', res.appraisal_id);
            this.router.navigateByUrl('/suite/appraisal/view-appraisal');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(appraisalData);
  }

}
