import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { jqxTabsComponent } from 'jqwidgets-ng/jqxtabs';

import { LettersApiService } from '../letters-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-all-letters',
  templateUrl: './all-letters.component.html',
  styleUrls: ['./all-letters.component.css']
})
export class AllLettersComponent implements OnInit, AfterViewInit {

  constructor(private lettersApi: LettersApiService) { }

  @ViewChild('tabReference') tab: jqxTabsComponent;
  @ViewChild('receivedGridReference') receivedGrid: jqxGridComponent;
  @ViewChild('sentGridReference') sentGrid: jqxGridComponent;
  @ViewChild('addReceivedReference') addReceived: jqxButtonComponent;
  @ViewChild('addSentReference') addSent: jqxButtonComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  navHeading: any[] = [
    { text: "All Letters", url: "/suite/letters/all-letters" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.receivedGrid.showloadelement();
    this.sentGrid.showloadelement();
    this.getReceivedData();
    this.getSentData();
  }

  getReceivedData(){
    this.lettersApi.getAllReceived()
      .subscribe(
        res => {
          console.log(res);
          this.receivedSource.localdata = res;
          this.receivedGrid.updatebounddata();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  getSentData(){
    this.lettersApi.getAllReceived()
      .subscribe(
        res => {
          console.log(res);
          this.sentSource.localdata = res;
          this.sentGrid.updatebounddata();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  // widgets
  // -----------------------------------------------------------------------------------------

  // received letters

  receivedSource: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'reference_number', type: 'string' },
      { name: 'subject', type: 'string' },
      { name: 'sender', type: 'string' },
      { name: 'date_received', type: 'string' },
      { name: 'letter_date', type: 'string' },
    ],
    id: 'id',
    addrow: (rowid, rowdata, position, commit) => {
      this.addReceivedRow(rowid, rowdata, position, commit);
    },
    updaterow: (rowid, newdata, commit) => {
      this.updateReceivedRow(rowid, newdata, commit);
    },
    deleterow: (rowid, commit) => {
      this.deleteReceivedRow(rowid, commit);
    }
  }

  receivedDataAdapter: any = new jqx.dataAdapter(this.receivedSource);

  receivedColumns: any[] = [
    { text: "Date Received", dataField: "date_received", filtertype: "range", width: "15%" },
    { text: "Sender", dataField: "sender", width: "25%" },
    { text: "Subject", dataField: "subject", width: "30%" },
    { text: "Letter Ref.", dataField: "reference_number", width: "15%" },
    { text: "Letter Date", dataField: "letter_date", filtertype: "range", width: "15%" },
  ];

  addReceivedRow(rowid, rowdata, position, commit){
    console.log("u are about adding a new row...");
    console.log(rowdata);

    let letterData =  {
      account: sessionStorage.getItem('enterprise_id'),
      reference_number: rowdata.reference_number,
      subject: rowdata.subject,
      sender: rowdata.sender,
      letter_date: rowdata.letter_date,
      date_received: rowdata.date_received,
    }

    console.log(letterData);

    this.loadingSpinner.httpLoader.open();

    this.lettersApi.postReceived(letterData)
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

  updateReceivedRow(rowid, newdata, commit){
    console.log("u are about updating a new row...");
    console.log(newdata);

    let letterData =  {
      account: sessionStorage.getItem('enterprise_id'),
      reference_number: newdata.reference_number,
      subject: newdata.subject,
      sender: newdata.sender,
      letter_date: newdata.letter_date,
      date_received: newdata.date_received,
    }

    console.log(letterData);

    this.loadingSpinner.httpLoader.open();

    this.lettersApi.putReceived(letterData, rowid)
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

  deleteReceivedRow(rowid, commit){
    console.log("u are about deleting a new row...");

    this.loadingSpinner.httpLoader.open();

    this.lettersApi.deleteReceived(rowid)
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

  onReceivedAddCommit(letterData: any) {
    this.receivedGrid.addrow(null, letterData);
  }

  onReceivedEditCommit(letterData: any) {
    this.receivedGrid.updaterow(letterData.id, letterData);
  }

  onReceivedDeleteCommit(letterId: number) {
    this.receivedGrid.deleterow(letterId);
  }

  // ---------------------------------------------------------------------------------------------------------------

  // sent letters

  sentSource: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'reference_number', type: 'string' },
      { name: 'subject', type: 'string' },
      { name: 'recipient', type: 'string' },
      { name: 'date_received', type: 'string' },
      { name: 'letter_date', type: 'string' },
    ],
    id: 'id',
    addrow: (rowid, rowdata, position, commit) => {
      this.addSentRow(rowid, rowdata, position, commit);
    },
    updaterow: (rowid, newdata, commit) => {
      this.updateSentRow(rowid, newdata, commit);
    },
    deleterow: (rowid, commit) => {
      this.deleteSentRow(rowid, commit);
    }
  }

  sentDataAdapter: any = new jqx.dataAdapter(this.sentSource);

  sentColumns: any[] = [
    { text: "Date Sent", dataField: "date_sent", filtertype: "range", width: "15%" },
    { text: "Recipient", dataField: "recipient", width: "25%" },
    { text: "Subject", dataField: "subject", width: "30%" },
    { text: "Letter Ref.", dataField: "reference_number", width: "15%" },
    { text: "Letter Date", dataField: "letter_date", filtertype: "range", width: "15%" },
  ];

  addSentRow(rowid, rowdata, position, commit){
    console.log("u are about adding a new row...");
    console.log(rowdata);

    let letterData =  {
      account: sessionStorage.getItem('enterprise_id'),
      reference_number: rowdata.reference_number,
      subject: rowdata.subject,
      recipient: rowdata.recipient,
      letter_date: rowdata.letter_date,
      date_sent: rowdata.date_sent,
    }

    console.log(letterData);

    this.loadingSpinner.httpLoader.open();

    this.lettersApi.postSent(letterData)
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

  updateSentRow(rowid, newdata, commit){
    console.log("u are about updating a new row...");
    console.log(newdata);

    let letterData =  {
      account: sessionStorage.getItem('enterprise_id'),
      reference_number: newdata.reference_number,
      subject: newdata.subject,
      recipient: newdata.recipient,
      letter_date: newdata.letter_date,
      date_sent: newdata.date_sent,
    }

    console.log(letterData);

    this.loadingSpinner.httpLoader.open();

    this.lettersApi.putSent(letterData, rowid)
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

  deleteSentRow(rowid, commit){
    console.log("u are about deleting a new row...");

    this.loadingSpinner.httpLoader.open();

    this.lettersApi.deleteSent(rowid)
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

  onSentAddCommit(letterData: any) {
    this.sentGrid.addrow(null, letterData);
  }

  onSentEditCommit(letterData: any) {
    this.sentGrid.updaterow(letterData.id, letterData);
  }

  onSentDeleteCommit(letterId: number) {
    this.sentGrid.deleterow(letterId);
  }

}
