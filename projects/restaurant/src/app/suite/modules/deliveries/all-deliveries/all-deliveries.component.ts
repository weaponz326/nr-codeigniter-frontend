import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { DeliveriesApiService } from '../deliveries-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-all-deliveries',
  templateUrl: './all-deliveries.component.html',
  styleUrls: ['./all-deliveries.component.css']
})
export class AllDeliveriesComponent implements OnInit, AfterViewInit {

  constructor(private deliveriesApi: DeliveriesApiService, public suiteRoutes: SuiteRoutesService) { }

  @ViewChild('newDeliveryReference') newDeliveryButton: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  navHeading: any[] = [
    { text: "All Deliveries", url: "/suite/deliveries/all-deliveries" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.deliveriesApi.getDeliveries()
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
  // ---------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'delivery_code', type: 'string' },
      { name: 'delivery_date', type: 'string' },
      { name: 'order_id', map: 'order>id', type: 'string' },
      { name: 'order_code', map: 'order>order_code', type: 'string' },
      { name: 'customer_name', map: 'order>customer_name', type: 'string' },
      { name: 'delivery_status', type: 'string' },
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
    { text: "Delivery ID", dataField: "delivery_code", width: "20%" },
    { text: "Customer Name", dataField: "customer_name", width: "40%" },
    { text: "Delivery Date", dataField: "delivery_date", filtertype: "range", width: "20%" },
    { text: "Delivery Status", dataField: "delivery_status", width: "20%" },
  ];

  addRow(rowid, rowdata, position, commit){
    console.log("u are about adding a new row...");
    console.log(rowdata);

    let deliveryData =  {
      restaurant: sessionStorage.getItem('restaurant_id'),
      order: rowdata.order_id,
      delivery_code: rowdata.delivery_code,
      delivery_date: rowdata.delivery_date,
      order_code: rowdata.order_code,
      customer_name: rowdata.customer_name,
      delivery_status: rowdata.delivery_status,
    }

    console.log(deliveryData);

    this.loadingSpinner.httpLoader.open();

    this.deliveriesApi.postDelivery(deliveryData)
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

    let deliveryData =  {
      restaurant: sessionStorage.getItem('restaurant_id'),
      order: newdata.order_id,
      delivery_code: newdata.delivery_code,
      delivery_date: newdata.delivery_date,
      order_code: newdata.order_code,
      customer_name: newdata.customer_name,
      delivery_status: newdata.delivery_status,
    }

    console.log(deliveryData);

    this.loadingSpinner.httpLoader.open();

    this.deliveriesApi.putDelivery(deliveryData, rowid)
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

    this.deliveriesApi.deleteDelivery(rowid)
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

  onAddCommit(deliveryData: any) {
    this.grid.addrow(null, deliveryData);
  }

  onEditCommit(deliveryData: any) {
    this.grid.updaterow(deliveryData.id, deliveryData);
  }

  onDeleteCommit(deliveryId: number) {
    this.grid.deleterow(deliveryId);
  }

}
