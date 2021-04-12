import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { InventoryApiService } from '../inventory-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-all-inventory',
  templateUrl: './all-inventory.component.html',
  styleUrls: ['./all-inventory.component.css']
})
export class AllInventoryComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private inventoryApi: InventoryApiService,
  ) { }

  @ViewChild('addInventoryReference') addInventoryButton: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  navHeading: any[] = [
    { text: "All Inventory", url: "/suite/inventory/all-inventory" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.inventoryApi.getAllInventory()
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
  // ---------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'product_code', type: 'string' },
      { name: 'product_name', type: 'string' },
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
    { text: "Product ID", dataField: "product_code", width: "10%" },
    { text: "Product Name", dataField: "product_name", width: "30%" },
    { text: "Location", dataField: "location", width: "20%" },
    { text: "Container", dataField: "container", width: "15%" },
    { text: "Bin No.", dataField: "bin_number", width: "15%" },
    { text: "Quantity", dataField: "quantity", width: "10%", cellsalign: 'right' },
  ];

  addRow(rowid, rowdata, position, commit){
    console.log("u are about adding a new row...");
    console.log(rowdata);

    let inventoryData =  {
      shop: sessionStorage.getItem('shop_id'),
      product_code: rowdata.product_code,
      product_name: rowdata.product_name,
      location: rowdata.location,
      container: rowdata.container,
      bin_number: rowdata.bin_number,
      quantity: rowdata.quantity,
    }

    console.log(inventoryData);

    this.loadingSpinner.httpLoader.open();

    this.inventoryApi.postInventory(inventoryData)
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

    let inventoryData =  {
      shop: sessionStorage.getItem('shop_id'),
      product_code: newdata.product_code,
      product_name: newdata.product_name,
      location: newdata.location,
      container: newdata.container,
      bin_number: newdata.bin_number,
      quantity: newdata.quantity,
    }

    console.log(inventoryData);

    this.loadingSpinner.httpLoader.open();

    this.inventoryApi.putInventory(inventoryData, rowid)
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

    this.inventoryApi.deleteInventory(rowid)
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

  onAddCommit(inventoryData: any) {
    this.grid.addrow(null, inventoryData);
  }

  onEditCommit(inventoryData: any) {
    this.grid.updaterow(inventoryData.id, inventoryData);
  }

  onDeleteCommit(inventoryId: number) {
    this.grid.deleterow(inventoryId);
  }

}
