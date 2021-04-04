import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { AccountsApiService } from '../accounts-api.service';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-account-transactions',
  templateUrl: './account-transactions.component.html',
  styleUrls: ['./account-transactions.component.css']
})
export class AccountTransactionsComponent implements OnInit, AfterViewInit {

  constructor(private accountsApi: AccountsApiService) { }

  @ViewChild("gridReference") grid: jqxGridComponent;
  @ViewChild("addbuttonReference") addButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  // emit aggregate sum value of transactions
  @Output() calculateBalance = new EventEmitter<any>();

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.accountsApi.getTransactions()
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

  // emits aggregated sum back to parent after being called
  getTotalBalance() {
    let totalBalance = this.grid.getcolumnaggregateddata('amount', ['sum']);
    this.calculateBalance.emit(totalBalance);

    console.log(totalBalance);
  }

  onAddCommit(transactionData: any) {
    this.grid.addrow(null, transactionData);
  }

  onEditCommit(transactionData: any) {
    this.grid.updaterow(transactionData.id, transactionData);
  }

  onDeleteCommit(transactionId: number) {
    this.grid.deleterow(transactionId);
  }

  // widgets
  // -------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'transaction_date', type: 'date' },
      { name: 'description', type: 'string' },
      { name: 'transaction_type', type: 'string' },
      { name: 'amount', type: 'string' },
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

  transactionDateTimeInput;
  typeDropDownList;
  amountNumberInput;

  columns: any[] = [
    { text: "Transaction Date", dataField: "transaction_date", columntype: "datetimeinput", width: "25%" },
    { text: "Description", dataField: "description", width: "40%" },
    { text: "Transaction Type", dataField: "transaction_type", columntype: "dropdownlist", width: "20%" },
    { text: "Amount", dataField: "amount", width: "15%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
  ];

  addRow(rowid, rowdata, position, commit) {
    console.log("u are about adding a new row...");
    console.log(rowdata);

    // add account id and negate amount if trnsaction type is Debit
    let transactionData = {};

    if (rowdata.transaction_type == "Credit"){
      transactionData = {
        account: sessionStorage.getItem('account_id'),
        transaction_date: rowdata.transaction_date,
        transaction_type: rowdata.transaction_type,
        description: rowdata.description,
        amount: Math.abs(rowdata.amount),
      }
    }else if (rowdata.transaction_type == "Debit"){
      transactionData = {
        account: sessionStorage.getItem('account_id'),
        transaction_date: rowdata.transaction_date,
        transaction_type: rowdata.transaction_type,
        description: rowdata.description,
        amount: ~(Math.abs(rowdata.amount)),
      }
    }

    console.log(transactionData);

    this.loadingSpinner.httpLoader.open();

    this.accountsApi.postTransaction(transactionData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
          commit(true, res.id);

          // reclaculate balance after change in table
          this.getTotalBalance();
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

    // negate amount if trnsaction type is Debit
    let transactionData = {};

    if (newdata.transaction_type == "Credit"){
      transactionData = {
        account: sessionStorage.getItem('account_id'),
        transaction_date: newdata.transaction_date,
        transaction_type: newdata.transaction_type,
        description: newdata.description,
        amount: Math.abs(newdata.amount),
      }
    }else if (newdata.transaction_type == "Debit"){
      transactionData = {
        account: sessionStorage.getItem('account_id'),
        transaction_date: newdata.transaction_date,
        transaction_type: newdata.transaction_type,
        description: newdata.description,
        amount: ~(Math.abs(newdata.amount)),
      }
    }

    this.loadingSpinner.httpLoader.open();

    this.accountsApi.putTransaction(rowid, transactionData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
          commit(true, res.id);

          // reclaculate balance after change in table
          this.getTotalBalance();
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

    this.accountsApi.deleteTransaction(rowid)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
          commit(true);

          // reclaculate balance after change in table
          this.getTotalBalance();
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

}
