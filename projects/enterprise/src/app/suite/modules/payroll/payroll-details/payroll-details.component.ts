import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router'

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { PayrollApiService } from '../payroll-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-payroll-details',
  templateUrl: './payroll-details.component.html',
  styleUrls: ['./payroll-details.component.css']
})
export class PayrollDetailsComponent implements OnInit, AfterViewInit {

  constructor(private router: Router, private payrollApi: PayrollApiService) { }

  @ViewChild("gridReference") grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.refreshSheet();
  }

  getData(){
    this.payrollApi.getPayrollSheet()
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

  refreshSheet(){
    this.payrollApi.refreshSheet()
      .subscribe(
        res => {
          console.log(res);
          this.getData();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  viewEmployeeSheet(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('payroll_sheet_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/payroll/employee-payroll');
  }

  // widgets
  // -------------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'employee_id', map: 'employee>id', type: 'string' },
      { name: 'employee_name', map: 'employee>employee_name', type: 'string' },
      { name: 'employee_code', map: 'employee>employee_code', type: 'string' },
      { name: 'bank_name', type: 'string' },
      { name: 'account_number', type: 'string' },
      { name: 'pay_grade', type: 'string' },
      { name: 'basic_pay', type: 'string' },
      { name: 'salary', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

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
