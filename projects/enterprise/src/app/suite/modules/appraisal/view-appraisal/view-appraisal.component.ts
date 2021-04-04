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
  @ViewChild('appraisalFormComponentReference') appraisalTransactionsComponent: AppraisalFormComponent;

  navHeading: any[] = [
    { text: "All Appraisal", url: "/suite/appraisal/all-appraisal" },
    { text: "View Appraisal", url: "/suite/appraisal/view-appraisal" },
  ];

  employeeIdStore: any;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.appraisalApi.getSingleAppraisal()
      .subscribe(
        res => {
          console.log(res);
          this.employeeIdStore = res.employee.id;
          this.appraisalCode.val(res.appraisal_code);
          this.employeeCode.val(res.employee.employee_code);
          this.employeeName.val(res.employee.employee_name);
          this.startDate.val(res.employee.start_date);
          this.endDate.val(res.employee.end_date);
          this.supervisor.val(res.employee.supervisor);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.appraisalApi.deleteAppraisal()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/appraisal/all-appraisal');
          },
          err => {
            console.log(err);
            this.loadingSpinner.httpLoader.close();
            this.connectionNotification.errorNotification.open();
          }
        )
    }
  }

  // widgets
  // ---------------------------------------------------------------------------------------

  saveAppraisal(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating the appraisal");

    let appraisalData = {
      user: sessionStorage.getItem('enterprise_id'),
      appraisal_code: this.appraisalCode.val(),
      employee_id: this.employeeIdStore,
      start_date: this.startDate.val(),
      end_date: this.endDate.val(),
      supervisor: this.supervisor.val(),
    }

    this.appraisalApi.putAppraisal(appraisalData)
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

    console.log(appraisalData);
  }

  deleteAppraisal(){
    console.log("dude... u are gonna delete the appraisal");

    this.deleteConfirmComponent.openWindow();
  }

}
