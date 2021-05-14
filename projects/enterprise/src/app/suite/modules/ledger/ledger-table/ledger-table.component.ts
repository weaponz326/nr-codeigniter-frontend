import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { LedgerApiService } from '../ledger-api.service';
import { LedgerCalcService } from '../ledger-calc.service';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-ledger-table',
  templateUrl: './ledger-table.component.html',
  styleUrls: ['./ledger-table.component.css']
})
export class LedgerTableComponent implements OnInit, AfterViewInit {

  // TODO: very difficult to update and delete item
  // TODO: have a look at the calc probably with JSONFields at the backend

  constructor(private ledgerApi: LedgerApiService, private ledgerCalc: LedgerCalcService) { }

  @ViewChild("gridReference") grid: jqxGridComponent;
  @ViewChild("addbuttonReference") addButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  // emit aggregate sum value of items
  @Output() calculateBalance = new EventEmitter<any>();

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.ledgerApi.getItems()
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

  onAddCommit(itemData: any) {
    let gridData = this.grid.getrows();
    console.log(gridData);
    let formattedData = this.ledgerCalc.reformatData(itemData, gridData);
    this.grid.addrow(null, formattedData);
  }

  onEditCommit(itemData: any) {
    let gridData = this.grid.getrows();
    console.log(gridData);
    let formattedData = this.ledgerCalc.reformatData(itemData, gridData);
    this.grid.updaterow(itemData.id, itemData);
  }

  onDeleteCommit(itemId: number) {
    // TODO: calculate balance alone
    this.grid.deleterow(itemId);
  }

  // widgets
  // --------------------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'item_date', type: 'date' },
      { name: 'description', type: 'string' },
      { name: 'reference_number', type: 'string' },
      { name: 'debit', type: 'string' },
      { name: 'credit', type: 'string' },
      { name: 'balance', type: 'string' },
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
    { text: "Date", dataField: "item_date", columntype: "datetimeinput", width: "15%" },
    { text: "Description", dataField: "description", width: "30%" },
    { text: "Reference No.", dataField: "reference_number", width: "10%" },
    { text: "Debit", dataField: "debit", width: "15%", cellsalign: 'right', cellsformat: 'c2' },
    { text: "Credit", dataField: "credit", width: "15%", cellsalign: 'right', cellsformat: 'c2' },
    { text: "Balance", dataField: "balance", width: "15%", cellsalign: 'right', cellsformat: 'c2' },
  ];

  addRow(rowid, rowdata, position, commit) {
    console.log("u are about adding a new row...");
    console.log(rowdata);

    let itemData = {
      account: sessionStorage.getItem('account_id'),
      item_date: rowdata.item_date,
      item_type: rowdata.reference_number,
      description: rowdata.description,
      debit: rowdata.debit,
      credit: rowdata.credit,
      balance: rowdata.balance,
    };

    this.loadingSpinner.httpLoader.open();

    this.ledgerApi.postItem(itemData)
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
      account: sessionStorage.getItem('account_id'),
      item_date: newdata.item_date,
      item_type: newdata.reference_number,
      description: newdata.description,
      debit: newdata.debit,
      credit: newdata.credit,
      balance: newdata.balance,
    };

    this.loadingSpinner.httpLoader.open();

    this.ledgerApi.putItem(rowid, itemData)
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

    this.ledgerApi.deleteItem(rowid)
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
