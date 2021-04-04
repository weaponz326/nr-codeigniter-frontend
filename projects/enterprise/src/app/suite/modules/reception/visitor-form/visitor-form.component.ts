import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';


@Component({
  selector: 'app-visitor-form',
  templateUrl: './visitor-form.component.html',
  styleUrls: ['./visitor-form.component.css']
})
export class VisitorFormComponent implements OnInit {

  constructor() { }

  @ViewChild("visitCodeReference") visitCode: jqxInputComponent;
  @ViewChild("visitDateReference") visitDate: jqxDateTimeInputComponent;
  @ViewChild("visitorNameReference") visitorName: jqxInputComponent;
  @ViewChild("visitorPhoneReference") visitorPhone: jqxInputComponent;
  @ViewChild("arrivalReference") arrival: jqxDateTimeInputComponent;
  @ViewChild("departureReference") departure: jqxDateTimeInputComponent;
  @ViewChild("purposeReference") purpose: jqxInputComponent;
  @ViewChild("tagNumberReference") tagNumber: jqxInputComponent;

  ngOnInit(): void {
  }

}
