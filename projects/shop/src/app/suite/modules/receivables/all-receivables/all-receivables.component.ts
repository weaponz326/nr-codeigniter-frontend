import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { ReceivablesApiService } from '../receivables-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-all-receivables',
  templateUrl: './all-receivables.component.html',
  styleUrls: ['./all-receivables.component.css']
})
export class AllReceivablesComponent implements OnInit {

  constructor(
    private router: Router,
    private receivablesApi: ReceivablesApiService,
  ) { }

  @ViewChild('addReceivableReference') addReceivableButton: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  navHeading: any[] = [
    { text: "All Receivables", url: "/suite/receivables/all-receivables" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.receivablesApi.getReceivables()
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
  // -----------------------------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'receivable_code', type: 'string' },
      { name: 'receivable_date', type: 'string' },
      { name: 'due_date', type: 'string' },
      { name: 'invoice_number', type: 'string' },
      { name: 'customer_name', type: 'string' },
      { name: 'amount', type: 'string' },
      { name: 'date_received', type: 'string' },
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
    { text: "Receivable ID", dataField: "receivable_code", width: "8%" },
    { text: "Date", dataField: "receivable_date", filtertype: "range", width: "10%" },
    { text: "Due Date", dataField: "due_date", filtertype: "range", width: "10%" },
    { text: "Invoice No.", dataField: "invoice_number", width: "8%" },
    { text: "Customer Name", dataField: "customer_name", width: "24%" },
    { text: "Amount", dataField: "amount", width: "15%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum']},
    { text: "Date Received", dataField: "date_received", filtertype: "range", width: "10%" },
    { text: "Outstanding", dataField: "outstanding", width: "15%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum']}
  ];

  addRow(rowid, rowdata, position, commit){
    console.log("u are about adding a new row...");
    console.log(rowdata);

    let receivableData =  {
      account: sessionStorage.getItem('shop_id'),
      receivable_code: rowdata.receivable_code,
      receivable_date: rowdata.receivable_date,
      due_date: rowdata.due_date,
      invoice_number: rowdata.invoice_number,
      customer_name: rowdata.customer_name,
      amount: rowdata.amount,
      date_received: rowdata.date_received,
      outstanding: rowdata.outstanding,
    }

    console.log(receivableData);

    this.loadingSpinner.httpLoader.open();

    this.receivablesApi.postReceivable(receivableData)
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

    let receivableData =  {
      account: sessionStorage.getItem('shop_id'),
      receivable_code: newdata.receivable_code,
      receivable_date: newdata.receivable_date,
      due_date: newdata.due_date,
      invoice_number: newdata.invoice_number,
      customer_name: newdata.customer_name,
      amount: newdata.amount,
      date_received: newdata.date_received,
      outstanding: newdata.outstanding,
    }

    console.log(receivableData);

    this.loadingSpinner.httpLoader.open();

    this.receivablesApi.putReceivable(receivableData, rowid)
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

    this.receivablesApi.deleteReceivable(rowid)
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

  onAddCommit(receivableData: any) {
    this.grid.addrow(null, receivableData);
  }

  onEditCommit(receivableData: any) {
    this.grid.updaterow(receivableData.id, receivableData);
  }

  onDeleteCommit(receivableId: number) {
    this.grid.deleterow(receivableId);
  }

}
