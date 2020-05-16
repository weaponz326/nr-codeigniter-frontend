import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist/public_api';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput/public_api';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput/public_api';

@Component({
  selector: 'app-employee-payroll',
  templateUrl: './employee-payroll.component.html',
  styleUrls: ['./employee-payroll.component.css']
})
export class EmployeePayrollComponent implements OnInit {

  constructor() { }

  @ViewChild("payrollCodeReference") payrollCode: jqxInputComponent;
  @ViewChild("payrollNameReference") payrollName: jqxInputComponent;
  @ViewChild("payrollDateReference") payrollDate: jqxDateTimeInputComponent;
  @ViewChild("employeeCodeReference") employeeCode: jqxInputComponent;
  @ViewChild("employeeNameReference") employeeName: jqxInputComponent;
  @ViewChild("bankNameReference") bankName: jqxInputComponent;
  @ViewChild("accountNumberReference") accountNumber: jqxInputComponent;
  @ViewChild("payGradeReference") payGrade: jqxDropDownListComponent;
  @ViewChild("monthReference") month: jqxDropDownListComponent;
  @ViewChild("yearReference") year: jqxDropDownListComponent;
  @ViewChild("basicPayReference") basicPay: jqxNumberInputComponent;
  @ViewChild("allowanceReference") allowance: jqxNumberInputComponent;
  @ViewChild("taxReference") tax: jqxNumberInputComponent;
  @ViewChild("salaryReference") salary: jqxNumberInputComponent;
  
  ngOnInit(): void {
  }

}
