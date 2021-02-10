import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  constructor() { }

  @ViewChild("reservationCodeReference") reservationCode: jqxInputComponent;
  @ViewChild("reservationDateReference") reservationDate: jqxDateTimeInputComponent;
  @ViewChild("customerNameReference") customerName: jqxComboBoxComponent;
  @ViewChild("guestsNumberReference") numberGuests: jqxNumberInputComponent;
  @ViewChild("tablesNumberReference") numberTables: jqxNumberInputComponent;
  @ViewChild("arrivalDateReference") arrivalDate: jqxDateTimeInputComponent;
  @ViewChild("reservationStatusReference") reservationStatus: jqxDropDownListComponent;

  ngOnInit(): void {
  }

}
