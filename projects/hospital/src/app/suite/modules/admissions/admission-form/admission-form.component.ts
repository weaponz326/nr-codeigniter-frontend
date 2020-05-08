import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist'

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css']
})
export class AdmissionFormComponent implements OnInit {

  constructor() { }

  @ViewChild('admissionCodeReference') admissionCode: jqxInputComponent;
  @ViewChild('admissionDateReference') admissionDate: jqxDateTimeInputComponent;
  @ViewChild('dateDischargedReference') dateDischarged: jqxDateTimeInputComponent;
  @ViewChild('patientNameReference') patientName: jqxDropDownListComponent;
  @ViewChild('patientCodeReference') patientCode: jqxDropDownListComponent;
  @ViewChild('assignedDoctorReference') assignedDoctor: jqxDropDownListComponent;
  @ViewChild('wardReference') ward: jqxDropDownListComponent;
  
  ngOnInit(): void {
  }

}
