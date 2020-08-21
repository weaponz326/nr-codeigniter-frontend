import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';

@Component({
  selector: 'app-checkin-form',
  templateUrl: './checkin-form.component.html',
  styleUrls: ['./checkin-form.component.css']
})
export class CheckinFormComponent implements OnInit {

  @ViewChild('checkinCodeReference') checkinCode: jqxInputComponent;
  @ViewChild('guestNameReference') guestName: jqxDropDownListComponent;
  @ViewChild('guestCodeReference') guestCode: jqxDropDownListComponent;
  @ViewChild('checkinDateReference') checkinDate: jqxDateTimeInputComponent;
  @ViewChild('checkoutDateReference') checkoutDate: jqxDateTimeInputComponent;
  @ViewChild('nightsNumberReference') nightsNumber: jqxNumberInputComponent;
  @ViewChild('roomNumberReference') roomNumber: jqxInputComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
