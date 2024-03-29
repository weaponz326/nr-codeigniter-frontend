import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { PurchasingApiService } from '../purchasing-api.service';
import { AddItemComponent } from '../add-item/add-item.component'
import { EditItemComponent } from '../edit-item/edit-item.component'

import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';


@Component({
  selector: 'app-purchasing-details',
  templateUrl: './purchasing-details.component.html',
  styleUrls: ['./purchasing-details.component.css']
})
export class PurchasingDetailsComponent implements OnInit, AfterViewInit {

  constructor(private purchasingApi: PurchasingApiService) { }

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
    this.purchasingApi.getPurchasingItems()
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
  // -------------------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'item_description', type: 'string' },
      { name: 'price', type: 'string' },
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

  columns: any[] = [
    { text: "Item Description", dataField: "item_description", width: "40%" },
    { text: 'Price', datafield: 'price', width: "20%", cellsalign: 'right', cellsformat: 'c2', columntype: 'numberinput' },
    { text: 'Quantity', datafield: 'quantity', width: "15%", cellsalign: 'right', columntype: 'numberinput' },
    { text: "Total Price", dataField: "total_price", width: "25%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum']}
  ];

  addRow(rowid, rowdata, position, commit) {
    console.log("u are about adding a new row...");
    console.log(rowdata);

    let itemData = {
      purchasing: sessionStorage.getItem('purchasing_id'),
      item_dscription: rowdata.item_description,
      quantity: rowdata.quantity,
      price: rowdata.price,
    }

    console.log(itemData);

    this.loadingSpinner.httpLoader.open();

    this.purchasingApi.postPurchasingItem(itemData)
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

  updateRow(rowid, newdata, commit) {
    console.log("u are about updating a row...");
    console.log(newdata);

    let itemData = {
      purchasing: sessionStorage.getItem('purchasing_id'),
      item_description: newdata.item_description,
      quantity: newdata.quantity,
      price: newdata.price,
    }

    this.loadingSpinner.httpLoader.open();

    this.purchasingApi.putPurchasingItem(rowid, itemData)
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

  deleteRow(rowid, commit) {
    console.log("u are about deleting a row...");

    this.loadingSpinner.httpLoader.open();

    this.purchasingApi.deletePurchasingItem(rowid)
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
