import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { OrdersApiService } from '../orders-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private ordersApi: OrdersApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  navHeading: any[] = [
    { text: "All Order", url: "/suite/orders/all-orders" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.ordersApi.getOrders()
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

  viewOrder(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('order_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/orders/view-order');
  }

  // widgets
  // ---------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'order_code', type: 'string' },
      { name: 'order_date', type: 'string' },
      { name: 'customer_name', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);
  columns: any[] = [
    { text: "Order ID", dataField: "order_code", width: "25%" },
    { text: "Customer Name", dataField: "customer_name", width: "50%" },
    { text: "Order Date", dataField: "order_date", filtertype: "range", width: "25%" },
  ];

}
