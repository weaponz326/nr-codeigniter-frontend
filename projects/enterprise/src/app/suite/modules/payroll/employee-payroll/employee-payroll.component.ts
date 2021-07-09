import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist/public_api';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput/public_api';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput/public_api';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox/public_api';

import { PayrollApiService } from '../payroll-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-employee-payroll',
  templateUrl: './employee-payroll.component.html',
  styleUrls: ['./employee-payroll.component.css']
})
export class EmployeePayrollComponent implements OnInit {

  constructor(private payrollApi: PayrollApiService) { }

  @ViewChild("payrollCodeReference") payrollCode: jqxInputComponent;
  @ViewChild("payrollNameReference") payrollName: jqxInputComponent;
  @ViewChild("payrollDateReference") payrollDate: jqxDateTimeInputComponent;
  @ViewChild("employeeCodeReference") employeeCode: jqxInputComponent;
  @ViewChild("employeeNameReference") employeeName: jqxInputComponent;
  @ViewChild("bankNameReference") bankName: jqxInputComponent;
  @ViewChild("accountNumberReference") accountNumber: jqxInputComponent;
  @ViewChild("payGradeReference") payGrade: jqxComboBoxComponent;
  @ViewChild("monthReference") month: jqxDropDownListComponent;
  @ViewChild("yearReference") year: jqxDropDownListComponent;
  @ViewChild("basicPayReference") basicPay: jqxNumberInputComponent;
  @ViewChild("allowanceReference") allowance: jqxNumberInputComponent;
  @ViewChild("taxReference") tax: jqxNumberInputComponent;
  @ViewChild("salaryReference") salary: jqxNumberInputComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Payroll", url: "/suite/payroll/all-payroll" },
    { text: "View Payroll", url: "/suite/payroll/view-payroll" },
    { text: "Employee Payroll", url: "/suite/payroll/employee-payroll" },
  ];

  monthsSource = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  yearsSource = this.getYears();
  statusSource = ['Processing', 'Deployed'];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.getSinglePayroll();
    this.getEmployeeSheet();
  }

  getYears(): any[] {
    var i, n=[];
    for (i=1900; i<=2021; i++) n.push(i);
    return n;
  }

  getSinglePayroll(){
    this.payrollApi.getSinglePayroll()
      .subscribe(
        res => {
          console.log(res);
          this.payrollName.val(res.payroll_name);
          this.payrollCode.val(res.payroll_code);
          this.payrollDate.val(res.date_generated);
          this.month.val(res.month);
          this.year.val(res.year);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  getEmployeeSheet(){
    this.payrollApi.getEmployeeSheet()
      .subscribe(
        res => {
          console.log(res);
          this.payrollName.val(res.payroll_name);
          this.employeeName.val(res.employee.employee_name);
          this.employeeCode.val(res.employee.employee_code);
          this.bankName.val(res.bank_name);
          this.accountNumber.val(res.account_number);
          this.payGrade.val(res.pay_grade);
          this.basicPay.val(res.basic_pay);
          this.allowance.val(res.allowanace);
          this.tax.val(res.tax);
          this.salary.val(res.salary);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  // -----------------------------------------------------------------------------------------------------

  saveSheet(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating the payroll sheet");

    let payrollData = {
      bank_name: this.bankName.val(),
      account_number: this.accountNumber.val(),
      pay_grade: this.payGrade.val(),
      basic_pay: this.basicPay.val(),
      allowance: this.allowance.val(),
      tax: this.tax.val(),
      salary: this.salary.val(),
    }

    this.payrollApi.putEmployeeSheet(payrollData)
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


}
