import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxCheckBoxComponent } from 'jqwidgets-ng/jqxcheckbox';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
  selector: 'app-checkin-form',
  templateUrl: './checkin-form.component.html',
  styleUrls: ['./checkin-form.component.css']
})
export class CheckinFormComponent implements OnInit {

  constructor() { }

  @ViewChild('checkinCodeReference') checkinCode: jqxInputComponent;
  @ViewChild('reservationCodeReference') reservationCode: jqxInputComponent;
  @ViewChild('bookingCheckBoceReference') reservationCheckBox: jqxCheckBoxComponent;
  @ViewChild('guestNameReference') guestName: jqxInputComponent;
  @ViewChild('guestCodeReference') guestCode: jqxInputComponent;
  @ViewChild('checkinDateReference') checkinDate: jqxDateTimeInputComponent;
  @ViewChild('checkoutDateReference') checkoutDate: jqxDateTimeInputComponent;
  @ViewChild('numberNightsReference') numberNights: jqxNumberInputComponent;
  @ViewChild('roomNumberReference') roomNumber: jqxInputComponent;
  @ViewChild('selectBookingButton') selectBooking: jqxInputComponent;

  enableBooking(){
    this.selectBooking.disabled(false);
  }

  disableBooking(){
    this.selectBooking.disabled(true);
  }

  ngOnInit(): void {
  }

}
