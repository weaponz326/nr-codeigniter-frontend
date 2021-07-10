import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { DuesApiService } from '../dues-api.service';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-dues-payments',
  templateUrl: './dues-payments.component.html',
  styleUrls: ['./dues-payments.component.css']
})
export class DuesPaymentsComponent implements OnInit, AfterViewInit {

  constructor(
    private duesApi: DuesApiService,
  ) { }

  @ViewChild("gridReference") grid: jqxGridComponent;
  @ViewChild("addbuttonReference") addButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.duesApi.getDuesPayments()
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

  onAddCommit(paymentData: any) {
    this.grid.addrow(null, paymentData);
  }

  onEditCommit(paymentData: any) {
    this.grid.updaterow(paymentData.id, paymentData);
  }

  onDeleteCommit(paymentId: number) {
    this.grid.deleterow(paymentId);
  }

  // widgets
  // -------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'payment_date', type: 'date' },
      { name: 'member_code', map: 'member>member_code', type: 'string' },
      { name: 'member_name', map: 'member>member_name', type: 'string' },
      { name: 'amount', type: 'string' },
    ],
    id: 'id',
    addrow: (rowid, rowdata, position, commit) => {
      this.addRow(rowid, rowdata, position, commit);
    },
    // updaterow: (rowid, newdata, commit) => {
    //   this.updateRow(rowid, newdata, commit);
    // },
    // deleterow: (rowid, commit) => {
    //   this.deleteRow(rowid, commit);
    // }
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  paymentDateTimeInput;
  typeDropDownList;
  amountNumberInput;

  columns: any[] = [
    { text: "Payment Date", dataField: "payment_date", columntype: "datetimeinput", width: "20%" },
    { text: "Member ID", dataField: "member_code", width: "20%" },
    { text: "Member Name", dataField: "member_name", width: "40%" },
    { text: "Amount", dataField: "amount", width: "20%", cellsalign: 'right', cellsformat: 'c2' },
  ];

  addRow(rowid, rowdata, position, commit) {
    console.log("u are about adding a new row...");
    console.log(rowdata);

    let paymentData = {
      dues: sessionStorage.getItem('dues_id'),
      payment_date: rowdata.payment_date,
      amount: rowdata.amount,
    };

    this.loadingSpinner.httpLoader.open();

    this.duesApi.postDuesPayment(paymentData)
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

  // updateRow(rowid, newdata, commit) {
  //   console.log("u are about updating a row...");
  //   console.log(newdata);

  //   // negate amount if trnsaction type is Debit
  //   let formattedData = this.duesCalc.reformatData(newdata);

  //   let paymentData = {
  //     account: sessionStorage.getItem('account_id'),
  //     payment_date: formattedData.payment_date,
  //     payment_type: formattedData.payment_type,
  //     description: formattedData.description,
  //     amount: formattedData.amount,
  //   };

  //   this.loadingSpinner.httpLoader.open();

  //   this.duesApi.putDuesPayment(rowid, paymentData)
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //         this.loadingSpinner.httpLoader.close();
  //         commit(true, res.data.id);

  //         // reclaculate balance after change in table
  //         this.getTotalBalance();
  //       },
  //       err => {
  //         console.log(err);
  //         this.loadingSpinner.httpLoader.close();
  //         this.connectionNotification.errorNotification.open();
  //       }
  //     )
  // }

  // deleteRow(rowid, commit) {
  //   console.log("u are about deleting a row...");

  //   this.loadingSpinner.httpLoader.open();

  //   this.duesApi.deleteDuesPayment(rowid)
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //         this.loadingSpinner.httpLoader.close();
  //         commit(true);

  //         // reclaculate balance after change in table
  //         this.getTotalBalance();
  //       },
  //       err => {
  //         console.log(err);
  //         this.loadingSpinner.httpLoader.close();
  //         this.connectionNotification.errorNotification.open();
  //       }
  //     )
  // }

}
