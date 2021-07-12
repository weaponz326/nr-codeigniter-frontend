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
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {

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
    { name: 'inflow', type: 'string' },
    { name: 'monday', type: 'string' },
    { name: 'tuesday', type: 'string' },
    { name: 'wednesday', type: 'string' },
    { name: 'thursday', type: 'string' },
    { name: 'friday', type: 'string' },
    { name: 'saturday', type: 'string' },
    { name: 'sunday', type: 'string' },
  ],
  id: 'id',
  addrow: (rowid, rowdata, position, commit) => {
    this.addInflowRow(rowid, rowdata, position, commit );
  },
}

inflowDataAdapter: any = new jqx.dataAdapter(this.inflowSource);

inflowColumns: any[] = [
    { text: "Cash Inflow", dataField: "inflows", width: "32%" },
    { text: "Monday", dataField: "moday", width: "8%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Tuesday", dataField: "tuesday", width: "8%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Wednesday", dataField: "wednesday", width: "8%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Thursday", dataField: "thursday", width: "8%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Friday", dataField: "friday", width: "8%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Saturday", dataField: "saturday", width: "8%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Sunday", dataField: "sunday", width: "8%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Total", dataField: "total", width: "12%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] }
  ];

  // cash outflow grid columns

  outflowSource: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'inflow', type: 'string' },
      { name: 'monday', type: 'string' },
      { name: 'tuesday', type: 'string' },
      { name: 'wednesday', type: 'string' },
      { name: 'thursday', type: 'string' },
      { name: 'friday', type: 'string' },
      { name: 'saturday', type: 'string' },
      { name: 'sunday', type: 'string' },
    ],
    id: 'id',
    addrow: (rowid, rowdata, position, commit) => {
      this.addInflowRow(rowid, rowdata, position, commit );
    },
  }
  
  outflowDataAdapter: any = new jqx.dataAdapter(this.outflowSource);
  
  outflowColumns: any[] = [
    { text: "Cash Outflows", dataField: "inflows", width: "35%" },
    { text: "Monday", dataField: "moday", width: "8%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Tuesday", dataField: "tuesday", width: "8%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Wednesday", dataField: "wednesday", width: "8%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Thursday", dataField: "thursday", width: "8%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Friday", dataField: "friday", width: "8%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Saturday", dataField: "saturday", width: "8%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Sunday", dataField: "sunday", width: "8%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Total", dataField: "total", width: "15%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] }
  ];

  // net cash flow grid columns
  netflowColumns: any[] = [
    { text: "Net Cash Flow", dataField: "inflows", width: "35%" },
    { text: "Monday", dataField: "moday", width: "8%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Tuesday", dataField: "tuesday", width: "8%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Wednesday", dataField: "wednesday", width: "8%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Thursday", dataField: "thursday", width: "8%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Friday", dataField: "friday", width: "8%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Saturday", dataField: "saturday", width: "8%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Sunday", dataField: "sunday", width: "8%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Total", dataField: "total", width: "15%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] }
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
