import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput/public_api';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

import { BookingsApiService } from '../bookings-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {

  constructor(
    private router: Router,
    private bookingsApi: BookingsApiService,
  ) { }

  @ViewChild("addBookingReference") addBooking: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("bookingCodeReference") bookingCode: jqxInputComponent;
  @ViewChild("bookingDateReference") bookingDate: jqxDateTimeInputComponent;
  @ViewChild("guestNameReference") guestName: jqxInputComponent;
  @ViewChild("guestCodeReference") guestCode: jqxInputComponent;
  @ViewChild("expectedArrivalReference") expectedArrival: jqxDateTimeInputComponent;
  @ViewChild("bookingStatusReference") bookingStatus: jqxDropDownListComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  ngOnInit(): void {
  }

  openWindow(){
    this.addBooking.open();
  }

  closeWindow(){
    this.addBooking.close();
  }

  saveBooking(){
    this.loadingSpinner.httpLoader.open();

    let bookingData = {
      account: sessionStorage.getItem('hotel_id'),
      booking_code: this.bookingCode.val(),
      booking_date: this.bookingDate.val(),
      expected_arrival: this.expectedArrival.val(),
      booking_status: this.bookingStatus.val(),
    }

    this.bookingsApi.postBooking(bookingData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.message == "OK"){
            sessionStorage.setItem('booking_id', res.data.id);
            this.closeWindow();
            this.router.navigateByUrl('/suite/bookings/view-booking');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(bookingData);
  }

}
