import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-payroll-details',
  templateUrl: './payroll-details.component.html',
  styleUrls: ['./payroll-details.component.css']
})
export class PayrollDetailsComponent implements OnInit {

  constructor() { }

  @ViewChild("gridReference") grid: jqxGridComponent;

  ngOnInit(): void {
  }

  // widgets
  // -------------------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "Employee ID", dataField: "employee_code", width: "10%" },
    { text: "Employee Name", dataField: "employee_name", width: "25%" },
    { text: "Bank Name", dataField: "bank_name", width: "20%" },
    { text: "Account No.", dataField: "account_number", width: "12%" },
    { text: "Pay Grade", dataField: "pay_grade", width: "13%" },
    { text: "Basic Pay", dataField: "basic_pay", width: "10%", cellsalign: 'right', cellsformat: 'c2' },
    { text: "Salary", dataField: "salary", width: "10%", cellsalign: 'right', cellsformat: 'c2' },
  ];

}
