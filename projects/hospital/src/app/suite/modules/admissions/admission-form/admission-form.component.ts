import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist'

import { SelectPatientComponent } from '../select-patient/select-patient.component'


@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css']
})
export class AdmissionFormComponent implements OnInit {

  constructor() { }

  @ViewChild('admissionCodeReference') admissionCode: jqxInputComponent;
  @ViewChild('admissionDateReference') admissionDate: jqxDateTimeInputComponent;
  @ViewChild('dischargeDateReference') dischargeDate: jqxDateTimeInputComponent;
  @ViewChild('patientNameReference') patientName: jqxInputComponent;
  @ViewChild('patientCodeReference') patientCode: jqxInputComponent;
  @ViewChild('admissionStatusReference') admissionStatus: jqxDropDownListComponent;
  @ViewChild('wardReference') ward: jqxInputComponent;

  @ViewChild("selectPatientComponentReference") selectPatient: SelectPatientComponent;

  patientIdStore: any;

  ngOnInit(): void {
  }

  patientSelected(patient: any){
    console.log(patient);

    this.patientName.val(patient.patient_name);
    this.patientCode.val(patient.clinical_id);
    this.patientIdStore = patient.id;
  }

  statusSource: any[] = ['Treatment', 'Admitted', 'Dischaged'];

}
