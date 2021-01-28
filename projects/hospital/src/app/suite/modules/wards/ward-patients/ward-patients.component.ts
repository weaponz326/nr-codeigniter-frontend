import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid'
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons'

import { WardsApiService } from '../wards-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-ward-patients',
  templateUrl: './ward-patients.component.html',
  styleUrls: ['./ward-patients.component.css']
})
export class WardPatientsComponent implements OnInit, AfterViewInit {

  @ViewChild("patientsGridReference") patientsGrid: jqxGridComponent;
  @ViewChild("addPatientButtonReference") addPatientButton: jqxButtonComponent;

  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;

  constructor(private wardsApi: WardsApiService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.patientsGrid.showloadelement();
    this.getData();
  }

  getData(){
    this.wardsApi.getWardPatients()
      .subscribe(
        res => {
          console.log(res);
          this.source.localdata = res;
          this.patientsGrid.updatebounddata();
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  // widgets
  // --------------------------------------------------------------------------------------------

  source: any = {
    localdata: null,
    dataType: 'json',
    dataFields: [
      { name: 'id', type: 'string' },
      { name: 'patient_name', map: 'patient>patient_name', type: 'string' },
      { name: 'clinical_id', map: 'patient>clinical_number', type: 'string' },
      { name: 'bed_number', type: 'string' },
      { name: 'status', type: 'string' },
      { name: 'date_admitted', type: 'string' },
      { name: 'date_discharged', type: 'string' },
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
    { text: "Patient Name", dataField: "patient_name", width: "50%" },
    { text: "Bed No.", dataField: "bed_number", width: "20%" },
    { text: "Admission Status", dataField: "status", width: "30%" },
  ];

  addRow(rowid, rowdata, position, commit){
    console.log("u are about adding a new row...");
    console.log(rowdata);

    let patientData =  {
      ward: sessionStorage.getItem('ward_id'),
      patient: rowdata.patient_id,
      bed_number: rowdata.bed_number,
      date_admitted: rowdata.date_admitted,
      date_discharged: rowdata.date_discharged,
      status: rowdata.status,
    }

    console.log(patientData);

    this.loadingSpinner.httpLoader.open();

    this.wardsApi.postWardPatient(patientData)
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

    let patientData =  {
      hospital: sessionStorage.getItem('hospital_id'),
      patient: newdata.patient_id,
      consultant: newdata.doctor_id,
      patient_code: newdata.patient_code,
      patient_date: newdata.patient_date,
      patient_for: newdata.patient_for,
      remarks: newdata.remarks,
      patient_status: newdata.patient_status,
    }

    console.log(patientData);

    this.loadingSpinner.httpLoader.open();

    this.wardsApi.putWardPatient(rowid, patientData)
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

    this.wardsApi.deleteWardPatient(rowid)
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
    this.patientsGrid.addrow(null, appointmentData);
  }

  onEditCommit(appointmentData: any) {
    this.patientsGrid.updaterow(appointmentData.id, appointmentData);
  }

  onDeleteCommit(appointmentId: number) {
    this.patientsGrid.deleterow(appointmentId);
  }

}
