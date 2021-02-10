import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { OrdersApiService } from '../orders-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { AddItemComponent } from '../add-item/add-item.component'
import { EditItemComponent } from '../edit-item/edit-item.component'

import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit, AfterViewInit {

  constructor(private ordersApi: OrdersApiService, public suiteRoutes: SuiteRoutesService) { }

  @ViewChild("gridReference") grid: jqxGridComponent;
  @ViewChild("buttonReference") button: jqxButtonComponent;

  @ViewChild('addItemComponentReference') addItem: AddItemComponent;
  @ViewChild('editItemComponentReference') editItem: EditItemComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.ordersApi.getItems()
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

  onAddCommit(detailData: any) {
    this.grid.addrow(null, detailData);
  }

  onEditCommit(detailData: any) {
    this.grid.updaterow(detailData.id, detailData);
  }

  onDeleteCommit(detailId: number) {
    this.grid.deleterow(detailId);
  }

  // widgets
  // -------------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'menu_item_id', map: 'menu_item>id', type: 'string' },
      { name: 'menu_item', map: 'menu_item>item_name', type: 'string' },
      { name: 'price', map: 'menu_item>price', type: 'string' },
      { name: 'quantity', type: 'string' },
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

  // grid columns
  columns: any[] = [
    { text: "Menu Item", dataField: "menu_item", width: "45%" },
    { text: 'Price', datafield: 'price', width: "20%", cellsalign: 'right', cellsformat: 'c2', columntype: 'numberinput' },
    { text: 'Quantity', datafield: 'quantity', width: "15%", cellsalign: 'right', columntype: 'numberinput' },
    { text: "Total Price", dataField: "total_price", width: "20%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum']}
  ];

  addRow(rowid, rowdata, position, commit) {
    console.log("u are about adding a new row...");
    console.log(rowdata);

    let itemData = {
      order: sessionStorage.getItem('order_id'),
      menu_item_id: rowdata.menu_item_id,
      quantity: rowdata.dosage,
    }

    console.log(itemData);

    this.loadingSpinner.httpLoader.open();

    this.ordersApi.postItem(itemData)
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

  updateRow(rowid, newdata, commit) {
    console.log("u are about updating a row...");
    console.log(newdata);

    let itemData = {
      order: sessionStorage.getItem('order_id'),
      menu_item_id: newdata.menu_item_id,
      quantity: newdata.dosage,
    }

    this.loadingSpinner.httpLoader.open();

    this.ordersApi.putItem(rowid, itemData)
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

  deleteRow(rowid, commit) {
    console.log("u are about deleting a row...");

    this.loadingSpinner.httpLoader.open();

    this.ordersApi.deleteItem(rowid)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
          commit(true);
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

}
