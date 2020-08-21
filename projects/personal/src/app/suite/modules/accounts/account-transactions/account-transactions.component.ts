import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { AccountsApiService } from '../accounts-api.service';


@Component({
  selector: 'app-account-transactions',
  templateUrl: './account-transactions.component.html',
  styleUrls: ['./account-transactions.component.css']
})
export class AccountTransactionsComponent implements OnInit, AfterViewInit {

  @ViewChild("gridReference") grid: jqxGridComponent;

  constructor(private accountsApi: AccountsApiService) { }

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
        }
      )
  }

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

    this.accountsApi.postTransaction(transactionData)
      .subscribe(
        res => {
          console.log(res);
          commit(true);
        },
        err => {
          console.log(err);
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

    this.accountsApi.putTransaction(rowid, transactionData)
      .subscribe(
        res => {
          console.log(res);
          commit(true);
        },
        err => {
          console.log(err);
        }
      )
  }

  deleteRow(rowid, commit) {
    console.log("u are about deleting a row...");

    this.accountsApi.deleteTransaction(rowid)
      .subscribe(
        res => {
          console.log(res);
          commit(true);
        },
        err => {
          console.log(err);
        }
      )
  }

  // widgets
  // -------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'transaction_date', type: 'string' },
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

  columns: any[] = [
    { text: "Transaction Date", dataField: "transaction_date", columntype: "datetimeinput", width: "20%" },
    { text: "Description", dataField: "description", width: "45%" },
    { text: "Transaction Type", dataField: "transaction_type", columntype: "dropdownlist", width: "20%" },
    { text: "Amount", dataField: "amount", width: "15%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
  ];

}
