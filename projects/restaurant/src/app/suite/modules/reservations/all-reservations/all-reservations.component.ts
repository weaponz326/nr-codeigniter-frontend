import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { ReservationsApiService } from '../reservations-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-all-reservations',
  templateUrl: './all-reservations.component.html',
  styleUrls: ['./all-reservations.component.css']
})
export class AllReservationsComponent implements OnInit, AfterViewInit {

  constructor(private reservationsApi: ReservationsApiService) { }

  @ViewChild('newReservationReference') newReservationButton: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  navHeading: any[] = [
    { text: "All Reservations", url: "/suite/reservations/all-reservations" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.reservationsApi.getReservations()
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
  // -----------------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'reservation_code', type: 'string' },
      { name: 'reservation_date', type: 'string' },
      { name: 'customer_name', type: 'string' },
      { name: 'guests_number', type: 'string' },
      { name: 'tables_number', type: 'string' },
      { name: 'arrival_date', type: 'string' },
      { name: 'reservation_status', type: 'string' },
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
    { text: "Reservation ID", dataField: "reservation_code", width: "15%" },
    { text: "Reservation Date", dataField: "reservation_date", filtertype: "range", width: "15%" },
    { text: "Customer Name", dataField: "customer_name", width: "35%" },
    { text: "Arrival Date", dataField: "arrival_date", filtertype: "range", width: "15%" },
    { text: "Reservation Status", dataField: "reservation_status", width: "20%" },
  ];

  addRow(rowid, rowdata, position, commit){
    console.log("u are about adding a new row...");
    console.log(rowdata);

    let rservationData =  {
      restaurant_id: sessionStorage.getItem('restaurant_id'),
      reservation_code: rowdata.reservation_code,
      reservation_date: rowdata.reservation_date,
      customer_name: rowdata.customer_name,
      number_guests: rowdata.number_guests,
      number_tables: rowdata.number_tables,
      arrival_date: rowdata.arrival_date,
      reservation_status: rowdata.reservation_status,
    }

    console.log(rservationData);

    this.loadingSpinner.httpLoader.open();

    this.reservationsApi.postReservation(rservationData)
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

    let rservationData =  {
      restaurant_id: sessionStorage.getItem('restaurant_id'),
      reservation_code: newdata.reservation_code,
      reservation_date: newdata.reservation_date,
      customer_name: newdata.customer_name,
      number_guests: newdata.number_guests,
      number_tables: newdata.number_tables,
      arrival_date: newdata.arrival_date,
      reservation_status: newdata.reservation_status,
    }

    console.log(rservationData);

    this.loadingSpinner.httpLoader.open();

    this.reservationsApi.putReservation(rservationData, rowid)
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
    console.log("u are about deleting a new row...");

    this.loadingSpinner.httpLoader.open();

    this.reservationsApi.deleteReservation(rowid)
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

  onAddCommit(itemData: any) {
    this.grid.addrow(null, itemData);
  }

  onEditCommit(itemData: any) {
    this.grid.updaterow(itemData.id, itemData);
  }

  onDeleteCommit(itemId: number) {
    this.grid.deleterow(itemId);
  }

}
