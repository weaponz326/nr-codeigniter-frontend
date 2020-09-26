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

    this.getTotalBalance();
  }

  getTotalBalance() {
    let totalBalance = this.grid.getcolumnaggregateddata('amount', ['sum']);
    console.log(totalBalance);
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

  transactionDateTimeInput;
  typeDropDownList;
  amountNumberInput;

  columns: any[] = [
    {
      text: "Transaction Date", dataField: "transaction_date", columntype: "datetimeinput", width: "25%",
      createEverPresentRowWidget: (datafield: string, htmlElement: HTMLElement, popup: any, addCallback: any): HTMLElement => {
        let container = document.createElement('div');
        container.id = 'transactionDateTimeInput';
        container.style.border = 'none';
        htmlElement[0].appendChild(container);
        let options = {
            width: '100%', height: 30, value: null, showTimeButton: true, formatString: 'yyyy-MM-dd HH:mm:ss',
            popupZIndex: 999999, placeHolder: 'Enter Transaction Date: '
        };
        this.transactionDateTimeInput = jqwidgets.createInstance('#transactionDateTimeInput', 'jqxDateTimeInput', options);
        return container;
      },
      getEverPresentRowWidgetValue: (datafield: string, htmlElement: HTMLElement, validate: any): any => {
          let value = this.transactionDateTimeInput.val();
          return value;
      },
      resetEverPresentRowWidgetValue: (datafield: string, htmlElement: HTMLElement): void => {
          this.transactionDateTimeInput.val(null);
      }
    },
    { text: "Description", dataField: "description", width: "40%" },
    {
      text: "Transaction Type", dataField: "transaction_type", columntype: "dropdownlist", width: "20%",
      createEverPresentRowWidget: (datafield: string, htmlElement: HTMLElement, popup: any, addCallback: any): HTMLElement => {
        let container = document.createElement('div');
        container.id = 'typeDropDownList';
        container.style.border = 'none';
        htmlElement[0].appendChild(container);
        let options = {
            width: '100%', height: 30, source: ['Credit', 'Debit'], autoDropDownHeight: true,
            popupZIndex: 999999, placeHolder: 'Enter Transaction Type: ', selectedIndex: 0
        };
        this.typeDropDownList = jqwidgets.createInstance('#typeDropDownList', 'jqxDropDownList', options);
        return container;
      },
      getEverPresentRowWidgetValue: (datafield: string, htmlElement: HTMLElement, validate: any): any => {
          let selectedItem = this.typeDropDownList.getSelectedItem();
          if (!selectedItem)
              return 'Credit';
          let value = selectedItem.label;
          return value;
      },
      resetEverPresentRowWidgetValue: (datafield: string, htmlElement: HTMLElement): void => {
          this.typeDropDownList.clearSelection();
      }
    },
    {
      text: "Amount", dataField: "amount", width: "15%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'],
      createEverPresentRowWidget: (datafield: string, htmlElement: HTMLElement, popup: any, addCallback: any): HTMLElement => {
        let container = document.createElement('div');
        container.id = 'amountNumberInput';
        container.style.border = 'none';
        htmlElement[0].appendChild(container);
        let options = {
            width: '100%', height: 30, decimalDigits: 2, inputMode: 'simple',
        };
        this.amountNumberInput = jqwidgets.createInstance('#amountNumberInput', 'jqxNumberInput', options);
        return container;
      },
      getEverPresentRowWidgetValue: (datafield: string, htmlElement: HTMLElement, validate: any): any => {
          let value = this.amountNumberInput.val();
          if (value == '') value = 0;
          return parseInt(value);
      },
      resetEverPresentRowWidgetValue: (datafield: string, htmlElement: HTMLElement): void => {
          this.amountNumberInput.val('');
      }
    },
  ];

}
