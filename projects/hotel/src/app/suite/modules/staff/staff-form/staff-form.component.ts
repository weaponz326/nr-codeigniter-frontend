import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxRadioButtonComponent } from 'jqwidgets-ng/jqxradiobutton'

@Component({
  selector: 'app-staff-form',
  templateUrl: './staff-form.component.html',
  styleUrls: ['./staff-form.component.css']
})
export class StaffFormComponent implements OnInit {

  constructor() { }

  @ViewChild('firstNameReference') firstNameInput: jqxInputComponent;
  @ViewChild('lastNameReference') lastNameInput: jqxInputComponent;
  @ViewChild('sexReference') sexRadioButton: jqxRadioButtonComponent;
  @ViewChild('dobReference') dobInput: jqxDateTimeInputComponent;
  @ViewChild('nationalityReference') nationalityInput: jqxInputComponent;
  @ViewChild('religionReference') religionInput: jqxInputComponent;
  @ViewChild('phoneReference') phoneInput: jqxInputComponent;
  @ViewChild('emailReference') emailInput: jqxInputComponent;
  @ViewChild('addressReference') addressInput: jqxTextAreaComponent;
  @ViewChild('stateReference') stateInput: jqxInputComponent;
  @ViewChild('cityReference') cityInput: jqxInputComponent;
  @ViewChild('postCodeReference') postCodeInput: jqxInputComponent;
  @ViewChild('staffCodeReference') staffCodeInput: jqxInputComponent;
  @ViewChild('jobReference') jobInput: jqxInputComponent;

  ngOnInit(): void {
  }

}
