import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { ReceptionApiService } from '../reception-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-all-visitors',
  templateUrl: './all-visitors.component.html',
  styleUrls: ['./all-visitors.component.css']
})
export class AllVisitorsComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private receptionApi: ReceptionApiService,
  ) { }

  @ViewChild('addVisitorReference') addVisitorButton: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  navHeading: any[] = [
    { text: "All Visitors", url: "/suite/visitors/all-visitors" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.receptionApi.getVisitors()
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
  // -------------------------------------------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'visit_code', type: 'string' },
      { name: 'visit_date', type: 'string' },
      { name: 'visitor_name', type: 'string' },
      { name: 'visitor_phone', type: 'string' },
      { name: 'arrival', type: 'string' },
      { name: 'departure', type: 'string' },
      { name: 'purpose', type: 'string' },
      { name: 'tag_number', type: 'string' },
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
    { text: "Visit Code",dataField: "visit_code", width: "15%" },
    { text: "Visit Date", dataField: "visit_date", filtertype: "range", width: "15%" },
    { text: "Visitor Name", dataField: "visitor_name", width: "35%" },
    { text: "Visitor Phone", dataField: "visitor_phone", width: "20%" },
    { text: "Tag No.", dataField: "tag_number", width: "15%" },
  ];

  addRow(rowid, rowdata, position, commit){
    console.log("u are about adding a new row...");
    console.log(rowdata);

    let visitorData =  {
      account: sessionStorage.getItem('enterprise_id'),
      visit_code: rowdata.visit_code,
      visit_date: rowdata.visit_date,
      visitor_name: rowdata.visitor_name,
      visitor_phone: rowdata.visitor_phone,
      arrival: rowdata.arrival,
      departure: rowdata.departure,
      purpose: rowdata.purpose,
      tag_number: rowdata.tag_number,
    }

    console.log(visitorData);

    this.loadingSpinner.httpLoader.open();

    this.receptionApi.postVisitor(visitorData)
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

    let visitorData =  {
      enterprise_id: sessionStorage.getItem('enterprise_id'),
      visit_code: newdata.visit_code,
      visit_date: newdata.visit_date,
      visitor_name: newdata.visitor_name,
      visitor_phone: newdata.visitor_phone,
      arrival: newdata.arrival,
      departure: newdata.departure,
      purpose: newdata.purpose,
      tag_number: newdata.tag_number,
    }

    console.log(visitorData);

    this.loadingSpinner.httpLoader.open();

    this.receptionApi.putVisitor(visitorData, rowid)
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

    this.receptionApi.deleteVisitor(rowid)
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

  onAddCommit(visitorData: any) {
    this.grid.addrow(null, visitorData);
  }

  onEditCommit(visitorData: any) {
    this.grid.updaterow(visitorData.id, visitorData);
  }

  onDeleteCommit(visitorId: number) {
    this.grid.deleterow(visitorId);
  }

}
