// patient_id = unique db pk id of patient
// clinical_number = user assigned id of patient
// patient_name = merged fname and lm=name of patient
// doctor_id = unique db pk id of doctor
// doctor_code = user assigned id of doctor
// doctor_name = merged fname and lm=name of doctor

import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

import { AppointmentsApiService } from '../appointments-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-all-appointments',
  templateUrl: './all-appointments.component.html',
  styleUrls: ['./all-appointments.component.css']
})
export class AllAppointmentsComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private appointmentsApi: AppointmentsApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('addAppointmentReference') addAppointmentButton: jqxButtonComponent;
  @ViewChild('gridReference') grid: jqxGridComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.grid.showloadelement();
    this.getData();
  }

  getData(){
    this.appointmentsApi.getAppointments()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.grid.updatebounddata();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  // widgets
  // -------------------------------------------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'appointment_code', type: 'string' },
      { name: 'patient_id', map: 'patient>id', type: 'string' },
      { name: 'patient_name', map: 'patient>patient_name', type: 'string' },
      { name: 'clinical_number', map: 'patient>clinical_number', type: 'string' },
      { name: 'doctor_id', map: 'consultant>id', type: 'string' },
      { name: 'doctor_name', map: 'consultant>doctor_name', type: 'string' },
      { name: 'appointment_date', type: 'string' },
      { name: 'appointment_for', type: 'string' },
      { name: 'remarks', type: 'string' },
      { name: 'appointment_status', type: 'string' },
    ],
    id: 'id',
    addrow: (rowid, rowdata, position, commit) => {
      this.addRow(rowid, rowdata, position, commit);
    },
    updaterow: (rowid, newdata, commit) => {
      this.updateRow(rowid, newdata, commit);
    },
    deleterow: (rowid, commit) => {
      this.deleteRow(rowid, commit);
    }
  }

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: "Appointment ID", dataField: "appointment_code", width: "10%" },
    { text: "Patient Name", dataField: "patient_name", width: "30%" },
    { text: "Consultant Name", dataField: "doctor_name", width: "30%" },
    { text: "Appointment Date", dataField: "appointment_date", filtertype: "range", width: "15%" },
    { text: "Appointment Status", dataField: "appointment_status", width: "15%" },
  ];

  addRow(rowid, rowdata, position, commit){
    console.log("u are about adding a new row...");
    console.log(rowdata);

    let appointmentData =  {
      hospital: sessionStorage.getItem('hospital_id'),
      patient: rowdata.patient_id,
      consultant: rowdata.doctor_id,
      appointment_code: rowdata.appointment_code,
      appointment_date: rowdata.appointment_date,
      appointment_for: rowdata.appointment_for,
      remarks: rowdata.remarks,
      appointment_status: rowdata.appointment_status,
    }

    console.log(appointmentData);

    this.loadingSpinner.httpLoader.open();

    this.appointmentsApi.postAppointment(appointmentData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
          commit(true, res.id);
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  updateRow(rowid, newdata, commit){
    console.log("u are about updating a new row...");
    console.log(newdata);

    let appointmentData =  {
      hospital: sessionStorage.getItem('hospital_id'),
      patient: newdata.patient_id,
      consultant: newdata.doctor_id,
      appointment_code: newdata.appointment_code,
      appointment_date: newdata.appointment_date,
      appointment_for: newdata.appointment_for,
      remarks: newdata.remarks,
      appointment_status: newdata.appointment_status,
    }

    console.log(appointmentData);

    this.loadingSpinner.httpLoader.open();

    this.appointmentsApi.putAppointment(appointmentData, rowid)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
          commit(true, res.id);
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  deleteRow(rowid, commit){
    console.log("u are about deleting a new row...");

    this.loadingSpinner.httpLoader.open();

    this.appointmentsApi.deleteAppointment(rowid)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
          commit(true, res.id);
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  onAddCommit(appointmentData: any) {
    this.grid.addrow(null, appointmentData);
  }

  onEditCommit(appointmentData: any) {
    this.grid.updaterow(appointmentData.id, appointmentData);
  }

  onDeleteCommit(appointmentId: number) {
    this.grid.deleterow(appointmentId);
  }

}
