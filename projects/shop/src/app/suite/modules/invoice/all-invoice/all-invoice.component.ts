import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { InvoiceApiService } from '../invoice-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-all-invoice',
  templateUrl: './all-invoice.component.html',
  styleUrls: ['./all-invoice.component.css']
})
export class AllInvoiceComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private invoiceApi: InvoiceApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  navHeading: any[] = [
    { text: "All Invoice", url: "/suite/invoice/all-invoice" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.invoiceApi.getInvoice()
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

  viewInvoice(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('invoice_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/invoice/view-invoice');
  }

  // widgets
  // -----------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'invoice_number', type: 'string' },
      { name: 'invoice_date', type: 'string' },
      { name: 'customer_name', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Invoice No.", dataField: "invoice_number", width: "20%" },
    { text: "Invoice Date", dataField: "invoice_date", width: "25%" },
    { text: "Customer Name", dataField: "customer_name", width: "55%" },
  ];

}
