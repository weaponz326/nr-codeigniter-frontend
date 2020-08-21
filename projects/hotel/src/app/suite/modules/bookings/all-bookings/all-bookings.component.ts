import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-all-bookings',
  templateUrl: './all-bookings.component.html',
  styleUrls: ['./all-bookings.component.css']
})
export class AllBookingsComponent implements OnInit {

  @ViewChild('addBookingReference') addAppointmentButton: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  constructor() { }

  ngOnInit(): void {
  }

  // widgets
  // -------------------------------------------------------------------------------------------

  columns: any[] = [
    { text: "Booking ID", dataField: "booking_code", width: "12%" },
    { text: "Booking Date", dataField: "booking_date", filtertype: "range", width: "15%" },
    { text: "Guest Name", dataField: "guest_name", width: "30%" },
    { text: "Guest ID", dataField: "guest_code", width: "12%" },
    { text: "Arrival Date", dataField: "arrival_date", filtertype: "range", width: "15%" },
    { text: "Booking Status", dataField: "booking_status", width: "16%" },
  ];

}
