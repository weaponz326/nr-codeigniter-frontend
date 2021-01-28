import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

import { SelectPatientComponent } from '../select-patient/select-patient.component'
import { SelectDoctorComponent } from '../select-doctor/select-doctor.component'


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
  @ViewChild("statusReference") appointmentStatus: jqxDropDownListComponent;

  @ViewChild("selectPatientComponentReference") selectPatient: SelectPatientComponent;
  @ViewChild("selectDoctorComponentReference") selectDoctor: SelectDoctorComponent;

  // stores db table ids of selected patient and doctor
  // to be retreived for sending to backend
  patientIdStore: any;
  doctorIdStore: any;

  constructor() { }

  ngOnInit(): void {
  }

  patientSelected(patient: any){
    console.log(patient);

    this.patientName.val(patient.patient_name);
    this.patientCode.val(patient.clinical_id);
    this.patientIdStore = patient.id;
  }

  doctorSelected(doctor: any){
    console.log(doctor);

    this.consultantName.val(doctor.doctor_name);
    this.doctorIdStore = doctor.id;
  }

  // source for status dropdownlist
  statusSource: any[] = ["Scheduled", "Ongoing", "Finished", "Cancelled"];

}
