import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {

  constructor() { }

  @ViewChild("bookingCodeReference") bookingCode: jqxInputComponent;
  @ViewChild("bookingDateReference") bookingDate: jqxDateTimeInputComponent;
  @ViewChild("guestNameReference") guestName: jqxDropDownListComponent;
  @ViewChild("guestCodeReference") guestCode: jqxDropDownListComponent;
  @ViewChild("arrivalDateReference") arrivalDate: jqxDateTimeInputComponent;
  @ViewChild("statusReference") status: jqxDropDownListComponent;
  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;

  navHeading: any[] = [
    { text: "All Bookings", url: "/suite/bookings/all-bookings" },
    { text: "View Booking", url: "/suite/bookings/view-booking" },
  ];

  ngOnInit(): void {
  }

}
