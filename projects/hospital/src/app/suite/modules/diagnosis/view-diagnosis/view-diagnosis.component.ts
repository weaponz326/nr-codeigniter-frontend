import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist'
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
  selector: 'app-view-diagnosis',
  templateUrl: './view-diagnosis.component.html',
  styleUrls: ['./view-diagnosis.component.css']
})
export class ViewDiagnosisComponent implements OnInit {

  constructor() { }

  @ViewChild('diagnosisCodeReference') diagnosisCode: jqxInputComponent;
  @ViewChild('diagnosisDateReference') diagnosisDate: jqxDateTimeInputComponent;
  @ViewChild('patientNameReference') patientName: jqxDropDownListComponent;
  @ViewChild('patientCodeReference') patientCode: jqxDropDownListComponent;
  @ViewChild('diagnosingDoctorReference') diagnosingDoctorCode: jqxDropDownListComponent;
  @ViewChild('saveDiagnosisReference') saveButton: jqxButtonComponent;

  ngOnInit(): void {
  }

}
