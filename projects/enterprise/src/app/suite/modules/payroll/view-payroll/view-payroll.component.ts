import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist/public_api';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput/public_api';

import { PayrollApiService } from '../payroll-api.service';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-view-payroll',
  templateUrl: './view-payroll.component.html',
  styleUrls: ['./view-payroll.component.css']
})
export class ViewPayrollComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private payrollApi: PayrollApiService,
  ) { }


  @ViewChild("payrollNameReference") payrollName: jqxInputComponent;
  @ViewChild("payrollCodeReference") payrollCode: jqxInputComponent;
  @ViewChild("dateGeneratedReference") dateGenerated: jqxDateTimeInputComponent;
  @ViewChild("monthReference") month: jqxDropDownListComponent;
  @ViewChild("yearReference") year: jqxDropDownListComponent;
  @ViewChild("statusReference") payrollStatus: jqxDropDownListComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("generateButtonReference") generateButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  ngOnInit(): void {
  }

  navHeading: any[] = [
    { text: "All Payroll", url: "/suite/payroll/all-payroll" },
    { text: "View Payroll", url: "/suite/payroll/view-payroll" },
  ];

  monthsSource = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  yearsSource = this.getYears();
  statusSource = ['Processing', 'Deployed'];

  ngAfterViewInit(): void {
    this.payrollApi.getSinglePayroll()
      .subscribe(
        res => {
          console.log(res);
          this.payrollCode.val(res.payroll_code);
          this.payrollName.val(res.payroll_name);
          this.payrollStatus.val(res.payroll_status);
          this.dateGenerated.val(res.date_generated);
          this.month.val(res.month);
          this.year.val(res.year);
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

      this.payrollApi.deletePayroll()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/payroll/all-payroll');
          },
          err => {
            console.log(err);
            this.loadingSpinner.httpLoader.close();
            this.connectionNotification.errorNotification.open();
          }
        )
    }
  }

  getYears(): any[] {
    var i, n=[];
    for (i=1900; i<=2021; i++) n.push(i);
    return n;
  }

  // -----------------------------------------------------------------------------------------------------

  savePayroll(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating the payroll");

    let payrollData = {
      account: sessionStorage.getItem('enterprise_id'),
      payroll_name: this.payrollName.val(),
      payroll_code: this.payrollCode.val(),
      payroll_status: this.payrollStatus.val(),
      date_generated: this.dateGenerated.val(),
      month: this.month.val(),
      year: this.year.val()
    }

    this.payrollApi.putPayroll(payrollData)
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

    console.log(payrollData);
  }

  deletePayroll(){
    console.log("dude... u are gonna delete the payroll");

    this.deleteConfirmComponent.openWindow();
  }

}
