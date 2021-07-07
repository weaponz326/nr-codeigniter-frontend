import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { FeesApiService } from '../fees-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-fees-details',
  templateUrl: './fees-details.component.html',
  styleUrls: ['./fees-details.component.css']
})
export class FeesDetailsComponent implements OnInit {

  constructor(private feesApi: FeesApiService) { }

  @ViewChild("itemsGridReference") itemsGrid: jqxGridComponent;
  @ViewChild("arrearsGridReference") arrearsGrid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.itemsGrid.showloadelement();
    this.getItemsData();
    this.getArrearsData();
  }

  getItemsData(){
    this.feesApi.getAllFeesItems()
      .subscribe(
        res => {
          console.log(res);
          this.itemsSource.localdata = res;
          this.itemsGrid.updatebounddata();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  getArrearsData(){
    this.feesApi.getAllArrears()
      .subscribe(
        res => {
          console.log(res);
          this.arrearsSource.localdata = res;
          this.arrearsGrid.updatebounddata();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  // --------------------------------------------------------------------------------------
  // items

  itemsSource: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'item', type: 'string' },
      { name: 'amount', type: 'string' },
    ],
    id: 'id',
    addrow: (rowid, rowdata, position, commit) => {
      this.addItemRow(rowid, rowdata, position, commit);
    },
    updaterow: (rowid, newdata, commit) => {
      this.updateItemRow(rowid, newdata, commit);
    },
    deleterow: (rowid, commit) => {
      this.deleteItemRow(rowid, commit);
    }
  }

  itemsDataAdapter: any = new jqx.dataAdapter(this.itemsSource);

  itemsColumns: any[] = [
    { text: "Item Description", dataField: "item", width: "70%" },
    { text: "Amount", dataField: "amount", width: "30%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum']}
  ];

  addItemRow(rowid, rowdata, position, commit){
    console.log("u are about adding a new row...");
    console.log(rowdata);

    let itemData =  {
      fee: sessionStorage.getItem('fees_id'),
      item: rowdata.item,
      amount: rowdata.amount,
    }

    console.log(itemData);

    this.loadingSpinner.httpLoader.open();

    this.feesApi.postFeesItem(itemData)
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

  updateItemRow(rowid, newdata, commit){
    console.log("u are about updating a new row...");
    console.log(newdata);

    let itemData =  {
      fees: sessionStorage.getItem('fees_id'),
      item: newdata.item,
      amount: newdata.amount,
    }

    console.log(itemData);

    this.loadingSpinner.httpLoader.open();

    this.feesApi.putFeesItem(itemData, rowid)
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

  deleteItemRow(rowid, commit){
    console.log("u are about deleting a new row...");

    this.loadingSpinner.httpLoader.open();

    this.feesApi.deleteFeesItem(rowid)
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

  onItemAddCommit(feeData: any) {
    this.itemsGrid.addrow(null, feeData);
  }

  onItemEditCommit(feeData: any) {
    this.itemsGrid.updaterow(feeData.id, feeData);
  }

  onItemDeleteCommit(feeId: number) {
    this.itemsGrid.deleterow(feeId);
  }

  // ----------------------------------------------------------------------------------------------------------------------
  // items

  arrearsSource: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'item', type: 'string' },
      { name: 'source', map: 'fee>fees_description', type: 'string' },
      { name: 'source_id', map: 'fee>id', type: 'string' },
    ],
    id: 'id',
    addrow: (rowid, rowdata, position, commit) => {
      this.addArrearsRow(rowid, rowdata, position, commit);
    },
    updaterow: (rowid, newdata, commit) => {
      this.updateArrearsRow(rowid, newdata, commit);
    },
    deleterow: (rowid, commit) => {
      this.deleteArrearsRow(rowid, commit);
    }
  }

  arrearsDataAdapter: any = new jqx.dataAdapter(this.arrearsSource);

  arrearsColumns: any[] = [
    { text: "Arrears Description", dataField: "item", width: "60%" },
    { text: "Arrears Source", dataField: "source", width: "40%" },
  ];

  addArrearsRow(rowid, rowdata, position, commit){
    console.log("u are about adding a new row...");
    console.log(rowdata);

    let arrearsData =  {
      fee: sessionStorage.getItem('fees_id'),
      item: rowdata.item,
      source: rowdata.source_id,
    }

    console.log(arrearsData);

    this.loadingSpinner.httpLoader.open();

    this.feesApi.postFeesItem(arrearsData)
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

  updateArrearsRow(rowid, newdata, commit){
    console.log("u are about updating a new row...");
    console.log(newdata);

    let arrearsData =  {
      fee: sessionStorage.getItem('fees_id'),
      item: newdata.item,
      source: newdata.source_id,
    }

    console.log(arrearsData);

    this.loadingSpinner.httpLoader.open();

    this.feesApi.putFeesItem(arrearsData, rowid)
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

  deleteArrearsRow(rowid, commit){
    console.log("u are about deleting a new row...");

    this.loadingSpinner.httpLoader.open();

    this.feesApi.deleteFeesItem(rowid)
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

  onArrearsAddCommit(feeData: any) {
    this.itemsGrid.addrow(null, feeData);
  }

  onArrearsEditCommit(feeData: any) {
    this.itemsGrid.updaterow(feeData.id, feeData);
  }

  onArrearsDeleteCommit(feeId: number) {
    this.itemsGrid.deleterow(feeId);
  }

}
