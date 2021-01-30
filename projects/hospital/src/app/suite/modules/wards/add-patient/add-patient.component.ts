import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { PatientFormComponent } from '../patient-form/patient-form.component'

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  constructor() { }

  @ViewChild("addPatientReference") addPatient: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("patientFormComponentReference") patientForm: PatientFormComponent;

  // emit event to commit data into grid in parent component
  @Output() addCommit = new EventEmitter<any>();

  ngOnInit(): void {
  }

  openWindow(){
    this.addPatient.open();
  }

  savePatient(){
    var patientData = {
      account: sessionStorage.getItem('hospital_id'),
      patient_id: this.patientForm.patientIdStore,
      patient_name: this.patientForm.patientName.val(),
      clinical_id: this.patientForm.patientCode.val(),
      bed_number: this.patientForm.bedNumber.val(),
      date_admitted: this.patientForm.dateAdmitted.val(),
      date_discharged: this.patientForm.dateDischarged.val(),
      status: this.patientForm.status.val(),
    }

    console.log(patientData);

    this.addCommit.emit(patientData);
  }

}
