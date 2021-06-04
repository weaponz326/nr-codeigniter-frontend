import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { StockApiService } from '../stock-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-all-stock',
  templateUrl: './all-stock.component.html',
  styleUrls: ['./all-stock.component.css']
})
export class AllStockComponent implements OnInit {
  constructor(
    private router: Router,
    private stockApi: StockApiService,
  ) { }

  @ViewChild('addStockReference') addStockButton: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  navHeading: any[] = [
    { text: "All Stock", url: "/suite/stock/all-stock" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.stockApi.getAllStock()
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
  // ----------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'material_code', map: 'material>material_code', type: 'string' },
      { name: 'material_name', map: 'material>material_name', type: 'string' },
      { name: 'location', type: 'string' },
      { name: 'container', type: 'string' },
      { name: 'bin_number', type: 'string' },
      { name: 'quntity', type: 'string' },
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
    { text: "Material ID", dataField: "material_code", width: "10%" },
    { text: "Material Name", dataField: "material_name", width: "25%" },
    { text: "Location", dataField: "location", width: "20%" },
    { text: "Container", dataField: "container", width: "15%" },
    { text: "Bin No.", dataField: "bin_number", width: "15%" },
    { text: "Quantity", dataField: "quantity", width: "15%" },
  ];

  addRow(rowid, rowdata, position, commit){
    console.log("u are about adding a new row...");
    console.log(rowdata);

    let stockData =  {
      account: sessionStorage.getItem('production_id'),
      location: rowdata.location,
      container: rowdata.container,
      bin_number: rowdata.bin_number,
      quantity: rowdata.quantity,
    }

    console.log(stockData);

    this.loadingSpinner.httpLoader.open();

    this.stockApi.postStock(stockData)
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

    let stockData =  {
      account: sessionStorage.getItem('production_id'),
      location: newdata.location,
      container: newdata.container,
      bin_number: newdata.bin_number,
      quantity: newdata.quantity,
    }

    console.log(stockData);

    this.loadingSpinner.httpLoader.open();

    this.stockApi.putStock(stockData, rowid)
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

    this.stockApi.deleteStock(rowid)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
          commit(true, rowid);
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  onAddCommit(stockData: any) {
    this.grid.addrow(null, stockData);
  }

  onEditCommit(stockData: any) {
    this.grid.updaterow(stockData.id, stockData);
  }

  onDeleteCommit(stockId: number) {
    this.grid.deleterow(stockId);
  }

}
