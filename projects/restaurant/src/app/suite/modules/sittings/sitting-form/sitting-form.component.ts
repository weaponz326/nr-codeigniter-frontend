import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';


@Component({
  selector: 'app-sitting-form',
  templateUrl: './sitting-form.component.html',
  styleUrls: ['./sitting-form.component.css']
})
export class SittingFormComponent implements OnInit {

  constructor() { }

  @ViewChild("sittingCodeReference") sittingCode: jqxInputComponent;
  @ViewChild("sittingDateReference") sittingDate: jqxDateTimeInputComponent;
  @ViewChild("arrivalTimeReference") arrivalTime: jqxDateTimeInputComponent;
  @ViewChild("departureTimeReference") departureTime: jqxDateTimeInputComponent;
  @ViewChild("customerNameReference") customerName: jqxInputComponent;
  @ViewChild("numberGuestsReference") numberGuests: jqxNumberInputComponent;

  ngOnInit(): void {
  }

}
