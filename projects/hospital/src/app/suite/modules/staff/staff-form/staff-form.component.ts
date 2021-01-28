import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist'
import { jqxPanelComponent } from 'jqwidgets-ng/jqxpanel'

@Component({
  selector: 'app-staff-form',
  templateUrl: './staff-form.component.html',
  styleUrls: ['./staff-form.component.css']
})
export class StaffFormComponent implements OnInit {

  @ViewChild('firstNameReference') firstNameInput: jqxInputComponent;
  @ViewChild('lastNameReference') lastNameInput: jqxInputComponent;
  @ViewChild('sexReference') sexDropDownList: jqxDropDownListComponent;
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
  @ViewChild('departmentReference') departmentInput: jqxInputComponent;
  @ViewChild('jobReference') jobInput: jqxInputComponent;
  @ViewChild('workStatusReference') workStatusDropDownList: jqxDropDownListComponent;
  @ViewChild('startedWorkDateReference') startedWorkDateInput: jqxDateTimeInputComponent;
  @ViewChild('endedWorkDateReference') endedWorkDateInput: jqxDateTimeInputComponent;

  sexSource: any[] = ["Male", "Female"];
  workStatusSource: any[] = ["Active", "Transfered", "Retired"];

  constructor() { }

  ngOnInit(): void {
  }

}
