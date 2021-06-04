import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { PayablesApiService } from '../payables-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-all-payables',
  templateUrl: './all-payables.component.html',
  styleUrls: ['./all-payables.component.css']
})
export class AllPayablesComponent implements OnInit {

  constructor(
    private router: Router,
    private payablesApi: PayablesApiService,
  ) { }

  @ViewChild('addPayableReference') addPayableButton: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  navHeading: any[] = [
    { text: "All Payables", url: "/suite/payables/all-payables" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.payablesApi.getPayables()
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
  // ---------------------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'payable_code', type: 'string' },
      { name: 'payable_date', type: 'string' },
      { name: 'due_date', type: 'string' },
      { name: 'invoice_number', type: 'string' },
      { name: 'customer_name', type: 'string' },
      { name: 'amount', type: 'string' },
      { name: 'date_paid', type: 'string' },
      { name: 'outstanding', type: 'string' },
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
    { text: "Payable ID", dataField: "payable_code", width: "8%" },
    { text: "Date", dataField: "payable_date", filtertype: "range", width: "10%" },
    { text: "Due Date", dataField: "due_date", filtertype: "range", width: "10%" },
    { text: "Invoice No.", dataField: "invoice_number", width: "8%" },
    { text: "Customer Name", dataField: "customer_name", width: "24%" },
    { text: "Amount", dataField: "amount", width: "15%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum']},
    { text: "Date Paid", dataField: "date_paid", filtertype: "range", width: "10%" },
    { text: "Outstanding", dataField: "outstanding", width: "15%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum']}
  ];

  addRow(rowid, rowdata, position, commit){
    console.log("u are about adding a new row...");
    console.log(rowdata);

    let payableData =  {
      account: sessionStorage.getItem('shop_id'),
      payable_code: rowdata.payable_code,
      payable_date: rowdata.payable_date,
      due_date: rowdata.due_date,
      invoice_number: rowdata.invoice_number,
      customer_name: rowdata.customer_name,
      amount: rowdata.amount,
      date_paid: rowdata.date_paid,
      outstanding: rowdata.outstanding,
    }

    console.log(payableData);

    this.loadingSpinner.httpLoader.open();

    this.payablesApi.postPayable(payableData)
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

    let payableData =  {
      account: sessionStorage.getItem('shop_id'),
      payable_code: newdata.payable_code,
      payable_date: newdata.payable_date,
      due_date: newdata.due_date,
      invoice_number: newdata.invoice_number,
      customer_name: newdata.customer_name,
      amount: newdata.amount,
      date_paid: newdata.date_paid,
      outstanding: newdata.outstanding,
    }

    console.log(payableData);

    this.loadingSpinner.httpLoader.open();

    this.payablesApi.putPayable(payableData, rowid)
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

    this.payablesApi.deletePayable(rowid)
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

  onAddCommit(payableData: any) {
    this.grid.addrow(null, payableData);
  }

  onEditCommit(payableData: any) {
    this.grid.updaterow(payableData.id, payableData);
  }

  onDeleteCommit(payableId: number) {
    this.grid.deleterow(payableId);
  }

}
