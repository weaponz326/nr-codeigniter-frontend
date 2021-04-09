import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { PaymentsApiService } from '../payments-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-all-payments',
  templateUrl: './all-payments.component.html',
  styleUrls: ['./all-payments.component.css']
})
export class AllPaymentsComponent implements OnInit {

  constructor(
    private router: Router,
    private paymentsApi: PaymentsApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  navHeading: any[] = [
    { text: "All Payments", url: "/suite/payments/all-payments" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.paymentsApi.getPayments()
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

  viewPayment(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('payment_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/payments/view-payment');
  }

  // widgets
  // ----------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'payment_code', type: 'string' },
      { name: 'payment_date', type: 'string' },
      { name: 'guest_name', map: 'guest>guest_name', type: 'string' },
      { name: 'guest_code', map: 'guest>guest_code', type: 'string' },
      { name: 'amount_paid', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Payment ID", dataField: "payment_code", width: "12%" },
    { text: "Payment Date", dataField: "payment_date", filtertype: "range", width: "18%" },
    { text: "Guest Name", dataField: "guest_name", width: "40%" },
    { text: "Guest ID", dataField: "guest_code", width: "12%" },
    { text: 'Amount Paid', dataField: 'amount_paid', width: "18%", cellsalign: 'right', cellsformat: 'c2' }
  ];

}
