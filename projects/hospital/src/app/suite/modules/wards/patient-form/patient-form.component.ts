import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

import { SelectPatientComponent } from '../select-patient/select-patient.component'


@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {

  constructor() { }

  @ViewChild("patientNameReference") patientName: jqxInputComponent;
  @ViewChild("patientCodeReference") patientCode: jqxInputComponent;
  @ViewChild("bedNumberReference") bedNumber: jqxInputComponent;
  @ViewChild("dateAdmittedReference") dateAdmitted: jqxDateTimeInputComponent;
  @ViewChild("dateDischargedReference") dateDischarged: jqxDateTimeInputComponent;
  @ViewChild("statusReference") status: jqxDropDownListComponent;

  @ViewChild("selectPatientComponentReference") selectPatient: SelectPatientComponent;

  // stores db table ids of selected patient and doctor
  // to be retreived for sending to backend
  patientIdStore: any;
  doctorIdStore: any;

  ngOnInit(): void {
  }

  patientSelected(patient: any){
    console.log(patient);

    this.patientName.val(patient.patient_name);
    this.patientCode.val(patient.clinical_id);
    this.patientIdStore = patient.id;
  }

  statusSource: any[] = ['Admitted', 'Discharged'];

}
