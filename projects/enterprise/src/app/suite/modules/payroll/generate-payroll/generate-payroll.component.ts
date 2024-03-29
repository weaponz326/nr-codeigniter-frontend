import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';

import { PayrollApiService } from '../payroll-api.service';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-generate-payroll',
  templateUrl: './generate-payroll.component.html',
  styleUrls: ['./generate-payroll.component.css']
})
export class GeneratePayrollComponent implements OnInit {

  constructor(
    private router: Router,
    private payrollApi: PayrollApiService,
  ) { }

  @ViewChild("generatePayrollReference") generatePayroll: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("payrollNameReference") payrollNameInput: jqxInputComponent;
  @ViewChild("payrollCodeReference") payrollCodeInput: jqxInputComponent;
  @ViewChild("dateGeneratedReference") dateGenerated: jqxDateTimeInputComponent;
  @ViewChild("monthReference") month: jqxDropDownListComponent;
  @ViewChild("yearReference") year: jqxDropDownListComponent;
  @ViewChild("statusReference") status: jqxDropDownListComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  monthsSource = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  yearsSource = this.getYears();
  statusSource = ['Processing', 'Deployed'];

  ngOnInit(): void {
  }

  // -------------------------------------------------------------------------------

  // open add payroll popup dialog window
  openWindow(){
    this.generatePayroll.open();
  }

  closeWindow(){
    this.generatePayroll.close();
  }

  savePayroll(){
    this.loadingSpinner.httpLoader.open();

    let payrollData = {
      account: sessionStorage.getItem('enterprise_id'),
      payroll_name: this.payrollNameInput.val(),
      payroll_status: this.status.val(),
      date_generated: this.dateGenerated.val(),
      month: this.month.val(),
      year: this.year.val()
    }

    this.payrollApi.postPayroll(payrollData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.message == "OK"){
            sessionStorage.setItem('payroll_id', res.data.id);
            this.closeWindow();
            this.router.navigateByUrl('/suite/payroll/view-payroll');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(payrollData);
  }

  getYears(): any[] {
    var i, n=[];
    for (i=1900; i<=2021; i++) n.push(i);
    return n;
  }

}
