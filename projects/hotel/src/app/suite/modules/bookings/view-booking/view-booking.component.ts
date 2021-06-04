import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

import { BookingsApiService } from '../bookings-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private bookingsApi: BookingsApiService,
  ) { }

  @ViewChild("bookingCodeReference") bookingCode: jqxInputComponent;
  @ViewChild("bookingDateReference") bookingDate: jqxDateTimeInputComponent;
  @ViewChild("guestNameReference") guestName: jqxDropDownListComponent;
  @ViewChild("guestCodeReference") guestCode: jqxDropDownListComponent;
  @ViewChild("arrivalDateReference") arrivalDate: jqxDateTimeInputComponent;
  @ViewChild("bookingStatusReference") bookingStatus: jqxDropDownListComponent;
  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  navHeading: any[] = [
    { text: "All Bookings", url: "/suite/bookings/all-bookings" },
    { text: "View Booking", url: "/suite/bookings/view-booking" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.bookingsApi.getSingleBooking()
      .subscribe(
        res => {
          console.log(res);
          this.bookingCode.val(res.booking_code);
          this.bookingDate.val(res.booking_date);
          this.guestName.val(res.guest.guest_name);
          this.guestCode.val(res.guest.guest_code);
          this.arrivalDate.val(res.arrivaldate);
          this.bookingStatus.val(res.booking_status);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveBooking(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a booking");

    var bookingData = {
      account: sessionStorage.getItem('hotel_id'),
      booking_code: this.bookingCode.val(),
      booking_date: this.bookingDate.val(),
      arrival_date: this.arrivalDate.val(),
      booking_status: this.bookingStatus.val(),
    }

    this.bookingsApi.putBooking(bookingData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(bookingData);
  }

  deleteBooking(){
    console.log("dude... u are gonna delete the booking?");

    // this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.bookingsApi.deleteBooking()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/bookings/all-bookings');
          },
          err => {
            console.log(err);
            this.loadingSpinner.httpLoader.close();
            this.connectionNotification.errorNotification.open();
          }
        )
    }
  }

}
