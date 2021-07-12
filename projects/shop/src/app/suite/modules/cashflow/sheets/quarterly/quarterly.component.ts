import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { CashflowApiService } from '../../cashflow-api.service';
import { AddInflowItemComponent } from '../add-inflow-item/add-inflow-item.component'
import { AddOutflowItemComponent } from '../add-outflow-item/add-outflow-item.component'

import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';


@Component({
  selector: 'app-quarterly',
  templateUrl: './quarterly.component.html',
  styleUrls: ['./quarterly.component.css']
})
export class QuarterlyComponent implements OnInit {

  constructor(private cashflowApi: CashflowApiService) { }

  @ViewChild('addInflowItemComponentReference') addInflowItem: AddInflowItemComponent;
  @ViewChild('addOutflowItemComponentReference') addOutflowItem: AddOutflowItemComponent;

  @ViewChild("inflowGridReference") inflowGrid: jqxGridComponent;
  @ViewChild("outflowGridReference") outflowGrid: jqxGridComponent;
  @ViewChild("netflowGridReference") netflowGrid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.inflowGrid.showloadelement();
    this.getInflowData();
    this.outflowGrid.showloadelement();
    this.getOutflowData();
  }

  getInflowData(){
    this.cashflowApi.getWeeklyInflows()
      .subscribe(
        res => {
          console.log(res);
          this.inflowSource.localdata = res;
          this.inflowGrid.updatebounddata();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  getOutflowData(){
    this.cashflowApi.getWeeklyOutflows()
      .subscribe(
        res => {
          console.log(res);
          this.outflowSource.localdata = res;
          this.outflowGrid.updatebounddata();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  onInflowAddCommit(data: any) {
    this.inflowGrid.addrow(null, data);
  }

  onOutflowAddCommit(data: any) {
    this.outflowGrid.addrow(null, data);
  }

  // widgets
  // --------------------------------------------------------------------------------------------------------------------------

  // cash inflow grid columns

  inflowSource: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'first_quarter', type: 'string' },
      { name: 'second_quarter', type: 'string' },
      { name: 'third_quarter', type: 'string' },
      { name: 'fourth_quarter', type: 'string' },
      { name: 'fifth_quarter', type: 'string' },
    ],
    id: 'id',
    addrow: (rowid, rowdata, position, commit) => {
      this.addInflowRow(rowid, rowdata, position, commit );
    },
  }

  inflowDataAdapter: any = new jqx.dataAdapter(this.inflowSource);

  inflowColumns: any[] = [
    { text: "Cash Inflow", dataField: "inflows", width: "35%" },
    { text: "1st Quarter", dataField: "first_quarter", width: "12%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "2nd Quarter", dataField: "second_quarter", width: "12%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "3rd Quarter", dataField: "third_quarter", width: "12%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "4th Quarter", dataField: "fourth_quarter", width: "12%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Total", dataField: "total", width: "17%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] }
  ];

  // cash outflow grid columns

  outflowSource: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'first_quarter', type: 'string' },
      { name: 'second_quarter', type: 'string' },
      { name: 'third_quarter', type: 'string' },
      { name: 'fourth_quarter', type: 'string' },
      { name: 'fifth_quarter', type: 'string' },
    ],
    id: 'id',
    addrow: (rowid, rowdata, position, commit) => {
      this.addInflowRow(rowid, rowdata, position, commit );
    },
  }

  outflowDataAdapter: any = new jqx.dataAdapter(this.outflowSource);

  outflowColumns: any[] = [
    { text: "Cash Outflow", dataField: "inflows", width: "35%" },
    { text: "1st Quarter", dataField: "first_quarter", width: "12%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "2nd Quarter", dataField: "second_quarter", width: "12%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "3rd Quarter", dataField: "third_quarter", width: "12%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "4th Quarter", dataField: "fourth_quarter", width: "12%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Total", dataField: "total", width: "17%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] }
  ];

  // net cash flow grid columns
  netflowColumns: any[] = [
    { text: "Net Cash Flow", dataField: "inflows", width: "35%" },
    { text: "1st Quarter", dataField: "first_quarter", width: "12%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "2nd Quarter", dataField: "second_quarter", width: "12%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "3rd Quarter", dataField: "third_quarter", width: "12%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "4th Quarter", dataField: "fourth_quarter", width: "12%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Total", dataField: "total", width: "17%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] }
  ];

  addInflowRow(rowid, rowdata, position, commit) {
    console.log("u are about adding a new row...");
    console.log(rowdata);

    let data = {
      cashflow: sessionStorage.getItem('cashflow_id'),
      inflow: rowdata.inflow,
    }

    this.loadingSpinner.httpLoader.open();
    this.cashflowApi.postWeeklyInflow(data)
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

  addOutflowRow(rowid, rowdata, position, commit) {
    console.log("u are about adding a new row...");
    console.log(rowdata);

    let data = {
      cashflow: sessionStorage.getItem('cashflow_id'),
      outflow: rowdata.outflow,
    }

    this.loadingSpinner.httpLoader.open();
    this.cashflowApi.postWeeklyOutflow(data)
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

}
