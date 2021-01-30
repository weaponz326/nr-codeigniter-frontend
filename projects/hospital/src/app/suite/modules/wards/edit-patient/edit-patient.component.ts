import { Component, OnInit, AfterViewInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { PatientFormComponent } from '../patient-form/patient-form.component'

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild("editPatientReference") editPatient: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;

  @ViewChild("patientFormComponentReference") patientForm: PatientFormComponent;

  // emit event to commit data into grid in parent component
  @Output() addCommit = new EventEmitter<any>();
  @Output() deleteCommit = new EventEmitter<number>();

  wardPatientId: any;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  openWindow(event: any){
    this.editPatient.open();

    console.log(event.args.row.bounddata);
    this.wardPatientId = event.args.row.bounddata.id;

    this.patientForm.patientIdStore = event.args.row.bounddata.patient_id;
    this.patientForm.bedNumber.val(event.args.row.bounddata.bed_number);
    this.patientForm.dateAdmitted.val(event.args.row.bounddata.date_admitted);
    this.patientForm.dateDischarged.val(event.args.row.bounddata.date_discharged);
    this.patientForm.status.val(event.args.row.bounddata.status);
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

  deletePatient(){
    this.deleteCommit.emit(this.wardPatientId);
  }

}
