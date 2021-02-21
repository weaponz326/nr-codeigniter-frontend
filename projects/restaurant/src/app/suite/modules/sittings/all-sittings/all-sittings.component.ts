import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { SittingsApiService } from '../sittings-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-all-sittings',
  templateUrl: './all-sittings.component.html',
  styleUrls: ['./all-sittings.component.css']
})
export class AllSittingsComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private sittingsApi: SittingsApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('newSittingReference') newSittingButton: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  navHeading: any[] = [
    { text: "All Sittings", url: "/suite/sittings/all-sittings" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.sittingsApi.getSittings()
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
      { name: 'sitting_code', type: 'string' },
      { name: 'sitting_date', type: 'string' },
      { name: 'arrival_time', type: 'string' },
      { name: 'departure_time', type: 'string' },
      { name: 'customer_name', type: 'string' },
      { name: 'number_guests', type: 'string' },
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
    { text: "Sitting ID", dataField: "sitting_code", width: "30%" },
    { text: "Sitting Date", dataField: "sitting_date", filtertype: "range", width: "30%" },
    { text: "Customer Name", dataField: "customer_name", width: "40%" },
  ];

  addRow(rowid, rowdata, position, commit){
    console.log("u are about adding a new row...");
    console.log(rowdata);

    let sittingData =  {
      restaurant: sessionStorage.getItem('restaurant_id'),
      sitting_code: rowdata.sitting_code,
      sitting_date: rowdata.sitting_date,
      arrival_time: rowdata.arrival_time,
      departure_time: rowdata.departure_time,
      consultant_name: rowdata.consultant_name,
      number_guests: rowdata.number_guests,
    }

    console.log(sittingData);

    this.loadingSpinner.httpLoader.open();

    this.sittingsApi.postSitting(sittingData)
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

  updateRow(rowid, newdata, commit){
    console.log("u are about updating a new row...");
    console.log(newdata);

    let sittingData =  {
      restaurant: sessionStorage.getItem('restaurant_id'),
      sitting_code: newdata.sitting_code,
      sitting_date: newdata.sitting_date,
      arrival_time: newdata.arrival_time,
      departure_time: newdata.departure_time,
      consultant_name: newdata.consultant_name,
      number_guests: newdata.number_guests,
    }

    console.log(sittingData);

    this.loadingSpinner.httpLoader.open();

    this.sittingsApi.putSitting(sittingData, rowid)
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

  deleteRow(rowid, commit){
    console.log("u are about deleting a row...");

    this.loadingSpinner.httpLoader.open();

    this.sittingsApi.deleteSitting(rowid)
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

  onAddCommit(sittingData: any) {
    this.grid.addrow(null, sittingData);
  }

  onEditCommit(sittingData: any) {
    this.grid.updaterow(sittingData.id, sittingData);
  }

  onDeleteCommit(sittingId: number) {
    this.grid.deleterow(sittingId);
  }

}
