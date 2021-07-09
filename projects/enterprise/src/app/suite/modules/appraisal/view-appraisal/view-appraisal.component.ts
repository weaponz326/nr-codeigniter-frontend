import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { AppraisalApiService } from '../appraisal-api.service';
import { AppraisalFormComponent } from '../appraisal-form/appraisal-form.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';

@Component({
  selector: 'app-view-appraisal',
  templateUrl: './view-appraisal.component.html',
  styleUrls: ['./view-appraisal.component.css']
})
export class ViewAppraisalComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private appraisalApi: AppraisalApiService,
  ) { }

  @ViewChild("appraisalCodeReference") appraisalCode: jqxInputComponent;
  @ViewChild("appraisalNameReference") appraisalName: jqxInputComponent;
  @ViewChild("employeeNameReference") employeeName: jqxDropDownListComponent;
  @ViewChild("employeeCodeReference") employeeCode: jqxDropDownListComponent;
  @ViewChild("startDateReference") startDate: jqxDateTimeInputComponent;
  @ViewChild("endDateReference") endDate: jqxDateTimeInputComponent;
  @ViewChild("supervisorReference") supervisor: jqxInputComponent;

  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('appraisalFormComponentReference') appraisalFormComponent: AppraisalFormComponent;

  navHeading: any[] = [
    { text: "All Appraisal", url: "/suite/appraisal/all-appraisal" },
    { text: "Appraisal Employees", url: "/suite/appraisal/appraisal-employees" },
    { text: "View Appraisal", url: "/suite/appraisal/view-appraisal" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getAppraisal();
    this.getEmployee();
  }

  getAppraisal(){
    this.appraisalApi.getSingleAppraisal()
      .subscribe(
        res => {
          console.log(res);
          this.appraisalCode.val(res.appraisal_code);
          this.appraisalName.val(res.appraisal_name);
          this.startDate.val(res.start_date);
          this.endDate.val(res.end_date);
          this.supervisor.val(res.supervisor);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  getEmployee(){
    this.appraisalApi.getSingleAppraisalForm()
      .subscribe(
        res => {
          console.log(res);
          this.employeeCode.val(res.employee.employee_code);
          this.employeeName.val(res.employee.employee_name);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

}
