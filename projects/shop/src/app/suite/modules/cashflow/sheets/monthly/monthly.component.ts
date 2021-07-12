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
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.css']
})
export class MonthlyComponent implements OnInit {

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
      { name: 'january', type: 'string' },
      { name: 'february', type: 'string' },
      { name: 'march', type: 'string' },
      { name: 'april', type: 'string' },
      { name: 'may', type: 'string' },
      { name: 'june', type: 'string' },
      { name: 'july', type: 'string' },
      { name: 'august', type: 'string' },
      { name: 'september', type: 'string' },
      { name: 'october', type: 'string' },
      { name: 'november', type: 'string' },
      { name: 'december', type: 'string' },
    ],
    id: 'id',
    addrow: (rowid, rowdata, position, commit) => {
      this.addInflowRow(rowid, rowdata, position, commit );
    },
  }

  inflowDataAdapter: any = new jqx.dataAdapter(this.inflowSource);

  inflowColumns: any[] = [
    { text: "Cash Inflow", dataField: "inflows", width: "20%" },
    { text: "January", dataField: "january", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "February", dataField: "february", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "March", dataField: "march", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "April", dataField: "april", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "May", dataField: "may", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "June", dataField: "june", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "July", dataField: "july", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "August", dataField: "august", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "September", dataField: "september", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "October", dataField: "october", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "November", dataField: "november", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "December", dataField: "december", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Total", dataField: "total", width: "8%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] }
  ];

  // cash outflow grid columns

  outflowSource: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'inflow', type: 'string' },
      { name: 'january', type: 'string' },
      { name: 'february', type: 'string' },
      { name: 'march', type: 'string' },
      { name: 'april', type: 'string' },
      { name: 'may', type: 'string' },
      { name: 'june', type: 'string' },
      { name: 'july', type: 'string' },
      { name: 'august', type: 'string' },
      { name: 'september', type: 'string' },
      { name: 'october', type: 'string' },
      { name: 'november', type: 'string' },
      { name: 'december', type: 'string' },
    ],
    id: 'id',
    addrow: (rowid, rowdata, position, commit) => {
      this.addInflowRow(rowid, rowdata, position, commit );
    },
  }

  outflowDataAdapter: any = new jqx.dataAdapter(this.outflowSource);

  outflowColumns: any[] = [
    { text: "Cash Outflow", dataField: "inflows", width: "20%" },
    { text: "January", dataField: "january", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "February", dataField: "february", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "March", dataField: "march", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "April", dataField: "april", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "May", dataField: "may", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "June", dataField: "june", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "July", dataField: "july", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "August", dataField: "august", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "September", dataField: "september", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "October", dataField: "october", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "November", dataField: "november", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "December", dataField: "december", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Total", dataField: "total", width: "8%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] }
  ];

  // net cashflow grid columns
  netflowColumns: any[] = [
    { text: "Net Cash Flow", dataField: "inflows", width: "20%" },
    { text: "January", dataField: "january", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "February", dataField: "february", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "March", dataField: "march", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "April", dataField: "april", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "May", dataField: "may", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "June", dataField: "june", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "July", dataField: "july", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "August", dataField: "august", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "September", dataField: "september", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "October", dataField: "october", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "November", dataField: "november", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "December", dataField: "december", width: "6%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] },
    { text: "Total", dataField: "total", width: "8%", cellsalign: 'right', cellsformat: 'c2', aggregates: ['sum'] }
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
