import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {

  @ViewChild("appointmentCodeReference") appointmentCode: jqxInputComponent;
  @ViewChild("patientNameReference") patientName: jqxInputComponent;
  @ViewChild("patientCodeReference") patientCode: jqxInputComponent;
  @ViewChild("consultantNameReference") consultantName: jqxInputComponent;
  @ViewChild("appointmentDateReference") appointmentDate: jqxDateTimeInputComponent;
  @ViewChild("appointmentForReference") appointmentFor: jqxInputComponent;
  @ViewChild("remarksReference") remarks: jqxTextAreaComponent;
  @ViewChild("statusReference") status: jqxDropDownListComponent;

  constructor() { }

  ngOnInit(): void {
  }

  // widgets
  // ---------------------------------------------------------------------------------

  // source for status dropdownlist
  statusSource: any[] = ["Scheduled", "Ongoing", "Finished"];

}
