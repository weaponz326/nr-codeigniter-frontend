import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { BillsApiService } from '../bills-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-all-bills',
  templateUrl: './all-bills.component.html',
  styleUrls: ['./all-bills.component.css']
})
export class AllBillsComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private billsApi: BillsApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  navHeading: any[] = [
    { text: "All Bills", url: "/suite/bills/all-bills" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.billsApi.getBills()
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

  viewBill(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('bill_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/bills/view-bill');
  }

  // widgets
  // -----------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'bill_code', type: 'string' },
      { name: 'bill_date', type: 'string' },
      { name: 'customer_name', type: 'string' },
      { name: 'total_amount', map: 'total_amount', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Bill ID", dataField: "bill_code", width: "15%" },
    { text: "Guest Name", dataField: "guest_name", width: "35%" },
    { text: "Guest ID", dataField: "guest_code", width: "15%" },
    { text: "Bill Date", dataField: "bill_date", filtertype: "range", width: "20%" },
    { text: "Total Amount", dataField: "total_amount", width: "15%" },
  ];

}
