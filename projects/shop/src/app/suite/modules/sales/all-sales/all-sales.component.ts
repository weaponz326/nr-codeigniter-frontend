import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { SalesApiService } from '../sales-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-all-sales',
  templateUrl: './all-sales.component.html',
  styleUrls: ['./all-sales.component.css']
})
export class AllSalesComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private salesApi: SalesApiService,
  ) { }

  @ViewChild('addSalesReference') addSalesButton: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  navHeading: any[] = [
    { text: "All Sales", url: "/suite/sales/all-sales" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.salesApi.getAllSales()
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
  // -----------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'sales_code', type: 'string' },
      { name: 'sales_date', type: 'string' },
      { name: 'product_code', type: 'string' },
      { name: 'product_name', type: 'string' },
      { name: 'unit_price', type: 'string' },
      { name: 'quantity', type: 'string' },
      { name: 'total_price', type: 'string' },
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
    { text: "Sales ID", dataField: "sales_code", width: "10%" },
    { text: "Product Name", dataField: "product_name", width: "30%" },
    { text: "Product ID", dataField: "product_code", width: "10%" },
    { text: "Date", dataField: "sales_date", filtertype: "range", width: "15%" },
    { text: "Unit Price", dataField: "unit_price", width: "10%", cellsalign: 'right', cellsformat: 'c2' },
    { text: "Quantity", dataField: "quantity", width: "10%", cellsalign: 'right' },
    { text: "Total Price", dataField: "total_price", width: "15%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum']}
  ];

  addRow(rowid, rowdata, position, commit){
    console.log("u are about adding a new row...");
    console.log(rowdata);

    let salesData =  {
      account: sessionStorage.getItem('shop_id'),
      sales_code: rowdata.sales_code,
      sales_date: rowdata.sales_date,
      product_code: rowdata.product_code,
      product_name: rowdata.product_name,
      unit_price: rowdata.unit_price,
      quantity: rowdata.quantity,
    }

    console.log(salesData);

    this.loadingSpinner.httpLoader.open();

    this.salesApi.postSales(salesData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
          commit(true, res.data.id);
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

    let salesData =  {
      account: sessionStorage.getItem('shop_id'),
      sales_code: newdata.sales_code,
      sales_date: newdata.sales_date,
      product_code: newdata.product_code,
      product_name: newdata.product_name,
      unit_price: newdata.unit_price,
      quantity: newdata.quantity,
    }

    console.log(salesData);

    this.loadingSpinner.httpLoader.open();

    this.salesApi.putSales(salesData, rowid)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
          commit(true, res.data.id);
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

    this.salesApi.deleteSales(rowid)
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

  onAddCommit(salesData: any) {
    this.grid.addrow(null, salesData);
  }

  onEditCommit(salesData: any) {
    this.grid.updaterow(salesData.id, salesData);
  }

  onDeleteCommit(salesId: number) {
    this.grid.deleterow(salesId);
  }

}
