import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  @ViewChild("reservationCodeReference") reservationCode: jqxInputComponent;
  @ViewChild("reservationDateReference") reservationDate: jqxDateTimeInputComponent;
  @ViewChild("customerNameReference") customerName: jqxComboBoxComponent;
  @ViewChild("guestsNumberReference") guestsNumber: jqxNumberInputModule;
  @ViewChild("tablesNumberReference") tablesNumber: jqxNumberInputModule;
  @ViewChild("arrivalDateReference") arrivalDate: jqxDateTimeInputComponent;
  @ViewChild("reservationStatusReference") reservationStatus: jqxDropDownListComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
