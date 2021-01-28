import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { AppointmentFormComponent } from '../appointment-form/appointment-form.component'


@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit {

  @ViewChild("editAppointmentReference") editAppointment: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("appointmentFormComponentReference") appointmentForm: AppointmentFormComponent;

  // emit event to commit data into grid in parent component
  @Output() editCommit = new EventEmitter<object>();
  @Output() deleteCommit = new EventEmitter<number>();

  appointmentId: any;

  constructor() { }

  ngOnInit(): void {
  }

  openWindow(event: any){
    this.editAppointment.open();

    console.log(event.args.row.bounddata);
    this.appointmentId = event.args.row.bounddata.id;

    this.appointmentForm.appointmentCode.val(event.args.row.bounddata.appointment_code);
    this.appointmentForm.patientIdStore = event.args.row.bounddata.patient_id;
    this.appointmentForm.patientName.val(event.args.row.bounddata.patient_name);
    this.appointmentForm.patientCode.val(event.args.row.bounddata.clinical_id);
    this.appointmentForm.doctorIdStore = event.args.row.bounddata.doctor_id;
    this.appointmentForm.consultantName.val(event.args.row.bounddata.consultant_name);
    this.appointmentForm.appointmentDate.val(event.args.row.bounddata.appointment_date);
    this.appointmentForm.appointmentFor.val(event.args.row.bounddata.appointment_for);
    this.appointmentForm.remarks.val(event.args.row.bounddata.remarks);
    this.appointmentForm.appointmentStatus.val(event.args.row.bounddata.appointment_status);
  }

  saveAppointment(){
    var appointmentData = {
      id: this.appointmentId,
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

    this.editCommit.emit(appointmentData);
  }

  deleteAppointment(){
    this.deleteCommit.emit(this.appointmentId);
  }

}
