import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { PayrollApiService } from '../payroll-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';

@Component({
  selector: 'app-all-payroll',
  templateUrl: './all-payroll.component.html',
  styleUrls: ['./all-payroll.component.css']
})
export class AllPayrollComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private payrollApi: PayrollApiService,
  ) { }

  @ViewChild('buttonReference') newButton: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;
  @ViewChild('transactionsButtonReference') transactionsButton: jqxButtonComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "All Payroll", url: "/suite/payroll/all-payroll" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.payrollApi.getPayroll()
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

  viewPayroll(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('payroll_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/payroll/view-payroll')
  }

  // widgets
  // ------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'payroll_name', type: 'string' },
      { name: 'payroll_status', type: 'string' },
      { name: 'date_generated', type: 'string' },
      { name: 'year', type: 'string' },
      { name: 'month', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Date Generated", dataField: "date_generated", width: "15%" },
    { text: "Payroll Name", dataField: "payroll_name", width: "35%" },
    { text: "Month", dataField: "month", width: "15%" },
    { text: "Year", dataField: "year", width: "15%" },
    { text: "Payroll Status", dataField: "payroll_status", width: "20%" },
  ]

}
