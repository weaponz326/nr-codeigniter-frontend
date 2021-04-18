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

  @ViewChild('newOrderReference') newOrderButton: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  navHeading: any[] = [
    { text: "All Orders", url: "/suite/orders/all-orders" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.ordersApi.getAllOrders()
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

  // widgets
  // ------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'order_code', type: 'string' },
      { name: 'order_date', type: 'string' },
      { name: 'product_code', type: 'string' },
      { name: 'product_name', type: 'string' },
      { name: 'customer_name', type: 'string' },
      { name: 'quntity', type: 'string' },
      { name: 'order_status', type: 'string' },
    ],
    id: 'id',
    addrow: (rowid, rowdata, position, commit) => {
      this.addRow(rowid, rowdata, position, commit);
    },
    updaterow: (rowid, newdata, commit) => {
      this.updateRow(rowid, newdata, commit);
    },
    deleterow: (rowid, commit) => {
      this.deleteRow(rowid, commit);
    }
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Order ID", dataField: "order_code", width: "10%" },
    { text: "Order Date", dataField: "order_date", filtertype: "range", width: "15%" },
    { text: "Customer Name", dataField: "customer_name", width: "20%" },
    { text: "Product ID", dataField: "product_code", width: "10%" },
    { text: "Product Name", dataField: "product_name", width: "20%" },
    { text: "Quantity", dataField: "quantity", width: "10%", cellsalign: 'right' },
    { text: "Order Status", dataField: "order_status", width: "15%" },
  ];

  addRow(rowid, rowdata, position, commit){
    console.log("u are about adding a new row...");
    console.log(rowdata);

    let orderData =  {
      production: sessionStorage.getItem('production_id'),
      order_code: rowdata.order_code,
      order_date: rowdata.order_date,
      product_code: rowdata.product_code,
      product_name: rowdata.product_name,
      customer_name: rowdata.customer_name,
      quantity: rowdata.quantity,
      order_status: rowdata.order_status,
    }

    console.log(orderData);

    this.loadingSpinner.httpLoader.open();

    this.ordersApi.postOrder(orderData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
          commit(true, res.id);
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  updateRow(rowid, newdata, commit){
    console.log("u are about updating a new row...");
    console.log(newdata);

    let orderData =  {
      production: sessionStorage.getItem('production_id'),
      order_code: newdata.order_code,
      order_date: newdata.order_date,
      product_code: newdata.product_code,
      product_name: newdata.product_name,
      customer_name: newdata.customer_name,
      order_status: newdata.order_status,
      quantity: newdata.quantity,
    }

    console.log(orderData);

    this.loadingSpinner.httpLoader.open();

    this.ordersApi.putOrder(orderData, rowid)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
          commit(true, res.id);
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  deleteRow(rowid, commit){
    console.log("u are about deleting a new row...");

    this.loadingSpinner.httpLoader.open();

    this.ordersApi.deleteOrder(rowid)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
          commit(true, res.id);
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  onAddCommit(orderData: any) {
    this.grid.addrow(null, orderData);
  }

  onEditCommit(orderData: any) {
    this.grid.updaterow(orderData.id, orderData);
  }

  onDeleteCommit(orderId: number) {
    this.grid.deleterow(orderId);
  }

}
