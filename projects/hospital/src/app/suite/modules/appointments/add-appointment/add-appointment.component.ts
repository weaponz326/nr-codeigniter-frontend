import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { AppointmentFormComponent } from '../appointment-form/appointment-form.component'


@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  constructor() { }

  @ViewChild("addAppointmentReference") addAppointment: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("appointmentFormComponentReference") appointmentForm: AppointmentFormComponent;

  // emit event to commit data into grid in parent component
  @Output() addCommit = new EventEmitter<any>();

  ngOnInit(): void {
  }

  openWindow(){
    this.addAppointment.open();
  }

  saveAppointment(){
    var appointmentData = {
      account: sessionStorage.getItem('hospital_id'),
      patient_id: this.appointmentForm.patientIdStore,
      patient_name: this.appointmentForm.patientName.val(),
      patient_code: this.appointmentForm.patientCode.val(),
      doctor_id: this.appointmentForm.doctorIdStore,
      consultant_name: this.appointmentForm.consultantName.val(),
      appointment_code: this.appointmentForm.appointmentCode.val(),
      appointment_date: this.appointmentForm.appointmentDate.val(),
      appointment_for: this.appointmentForm.appointmentFor.val(),
      remarks: this.appointmentForm.remarks.val(),
      appointment_status: this.appointmentForm.appointmentStatus.val(),
    }

    console.log(appointmentData);

    this.addCommit.emit(appointmentData);
  }

}
