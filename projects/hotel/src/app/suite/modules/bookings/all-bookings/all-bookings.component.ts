import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { BookingsApiService } from '../bookings-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-all-bookings',
  templateUrl: './all-bookings.component.html',
  styleUrls: ['./all-bookings.component.css']
})
export class AllBookingsComponent implements OnInit {

  constructor(
    private router: Router,
    private bookingsApi: BookingsApiService,
  ) { }

  @ViewChild('buttonReference') button: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  navHeading: any[] = [
    { text: "All Bookings", url: "/suite/bookings/all-bookings" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.bookingsApi.getBookings()
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

  viewBooking(event: any){
    console.log(event.args.row.bounddata);
    sessionStorage.setItem('booking_id', event.args.row.bounddata.id);

    this.router.navigateByUrl('/suite/bookings/view-booking');
  }

  // widgets
  // -------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'booking_code', type: 'string' },
      { name: 'booking_date', type: 'string' },
      { name: 'expected_arrival', type: 'string' },
      { name: 'guest_name', map: 'guest>guest_name', type: 'string' },
      { name: 'guest_code', map: 'guest>guest_code', type: 'string' },
      { name: 'booking_status', type: 'string' },
    ],
    id: 'id',
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Booking ID", dataField: "booking_code", width: "12%" },
    { text: "Booking Date", dataField: "booking_date", filtertype: "range", width: "15%" },
    { text: "Guest Name", dataField: "guest_name", width: "30%" },
    { text: "Guest ID", dataField: "guest_code", width: "12%" },
    { text: "Expected Arrival", dataField: "expected_arrival", filtertype: "range", width: "15%" },
    { text: "Booking Status", dataField: "booking_status", width: "16%" },
  ];

}
