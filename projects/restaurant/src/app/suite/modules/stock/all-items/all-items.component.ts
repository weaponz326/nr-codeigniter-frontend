import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { StockApiService } from '../stock-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.css']
})
export class AllItemsComponent implements OnInit, AfterViewInit {

  constructor(private stockApi: StockApiService, public suiteRoutes: SuiteRoutesService) { }

  @ViewChild('addItemReference') addItemButton: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  navHeading: any[] = [
    { text: "All Items", url: "/suite/stock/all-items" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.stockApi.getItems()
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
      { name: 'item_code', type: 'string' },
      { name: 'item_name', type: 'string' },
      { name: 'category', type: 'string' },
      { name: 'item_type', type: 'string' },
      { name: 'quantity', type: 'string' },
      { name: 'refill_ordered', type: 'string' },
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
    { text: "Item ID", dataField: "item_code", width: "20%" },
    { text: "Item Name", dataField: "item_name", width: "60%" },
    { text: "Quantity", dataField: "quantity", width: "20%" },
  ];

  addRow(rowid, rowdata, position, commit){
    console.log("u are about adding a new row...");
    console.log(rowdata);

    let itemData =  {
      restaurant: sessionStorage.getItem('restaurant_id'),
      item_code: rowdata.item_code,
      item_name: rowdata.item_name,
      category: rowdata.category,
      item_type: rowdata.item_type,
      quantity: rowdata.quantity,
      refill_ordered: rowdata.refill_ordered,
    }

    console.log(itemData);

    this.loadingSpinner.httpLoader.open();

    this.stockApi.postItem(itemData)
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

    let itemData =  {
      restaurant: sessionStorage.getItem('restaurant_id'),
      item_code: newdata.item_code,
      item_name: newdata.item_name,
      category: newdata.category,
      item_type: newdata.item_type,
      quantity: newdata.quantity,
      refill_ordered: newdata.refill_ordered,
    }

    console.log(itemData);

    this.loadingSpinner.httpLoader.open();

    this.stockApi.putItem(itemData, rowid)
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

    this.stockApi.deleteItem(rowid)
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

  onAddCommit(itemData: any) {
    this.grid.addrow(null, itemData);
  }

  onEditCommit(itemData: any) {
    this.grid.updaterow(itemData.id, itemData);
  }

  onDeleteCommit(itemId: number) {
    this.grid.deleterow(itemId);
  }

}
