import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { AppraisalApiService } from '../appraisal-api.service';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';


@Component({
  selector: 'app-appraisal-employees',
  templateUrl: './appraisal-employees.component.html',
  styleUrls: ['./appraisal-employees.component.css']
})
export class AppraisalEmployeesComponent implements OnInit {

  constructor(
    private router: Router,
    private appraisalApi: AppraisalApiService,
  ) { }

  @ViewChild("appraisalCodeReference") appraisalCode: jqxInputComponent;
  @ViewChild("appraisalNameReference") appraisalName: jqxInputComponent;
  @ViewChild("startDateReference") startDate: jqxDateTimeInputComponent;
  @ViewChild("endDateReference") endDate: jqxDateTimeInputComponent;
  @ViewChild("supervisorReference") supervisor: jqxInputComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  navHeading: any[] = [
    { text: "All Appraisal", url: "/suite/appraisal/all-appraisal" },
    { text: "Appraisal Employees", url: "/suite/appraisal/appraisal-employees" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
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

      this.refreshAppraisal();
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

  viewForm(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('appraisal_form_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/appraisal/view-appraisal')
  }

  // widgets
  // ---------------------------------------------------------------------------------------

  saveAppraisal(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating the appraisal");

    let appraisalData = {
      account: sessionStorage.getItem('enterprise_id'),
      appraisal_code: this.appraisalCode.val(),
      appraisal_name: this.appraisalName.val(),
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

  // ---------------------------------------------------------------------------------------------------
  // grid

  refreshAppraisal(){
    this.appraisalApi.refreshAppraisal()
      .subscribe(
        res => {
          console.log(res);
          this.grid.showloadelement();
          this.getEmployeesData();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  getEmployeesData(){
    this.appraisalApi.getAllAppraisalForm()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.grid.updatebounddata();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'employee_code', map: 'employee>employee_code', type: 'string' },
      { name: 'employee_name', map: 'employee>employee_name', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Employee ID", dataField: "employee_code", width: "30%" },
    { text: "Employee Name", dataField: "employee_name", width: "70%" },
  ]

}
