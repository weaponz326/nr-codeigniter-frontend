import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { PrescriptionsApiService } from '../prescriptions-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { SelectPatientComponent } from '../select-patient/select-patient.component'
import { SelectDoctorComponent } from '../select-doctor/select-doctor.component'


@Component({
  selector: 'app-view-prescription',
  templateUrl: './view-prescription.component.html',
  styleUrls: ['./view-prescription.component.css']
})
export class ViewPrescriptionComponent implements OnInit, AfterViewInit {

  @ViewChild('prescriptionCodeReference') prescriptionCode: jqxInputComponent;
  @ViewChild('prescriptionDateReference') prescriptionDate: jqxDateTimeInputComponent;
  @ViewChild('patientNameReference') patientName: jqxInputComponent;
  @ViewChild('patientCodeReference') patientCode: jqxInputComponent;
  @ViewChild('doctorNameReference') doctorName: jqxInputComponent;

  @ViewChild('savePrescriptionReference') saveButton: jqxButtonComponent;
  @ViewChild('deletePrescriptionReference') deleteButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild("selectPatientComponentReference") selectPatient: SelectPatientComponent;
  @ViewChild("selectDoctorComponentReference") selectDoctor: SelectDoctorComponent;

  // stores db table ids of selected patient and doctor
  // to be retreived for sending to backend
  patientIdStore: any;
  doctorIdStore: any;

  constructor(
    private router: Router,
    private prescriptionsApi: PrescriptionsApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.prescriptionsApi.getSinglePrescription()
      .subscribe(
        res => {
          console.log(res);
          this.prescriptionCode.val(res.prescription_code);
          this.prescriptionDate.val(res.prescription_date);
          this.patientIdStore = res.patient.id;
          this.patientName.val(res.patient.patient_name);
          this.patientCode.val(res.patient.clinical_id);
          this.doctorIdStore = res.doctor.id;
          this.doctorName.val(res.doctor.doctor_name);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  patientSelected(patient: any){
    console.log(patient);

    this.patientName.val(patient.patient_name);
    this.patientCode.val(patient.clinical_id);
    this.patientIdStore = patient.id;
  }

  doctorSelected(doctor: any){
    console.log(doctor);

    this.doctorName.val(doctor.doctor_name);
    this.doctorIdStore = doctor.id;
  }

  // widgets
  // ----------------------------------------------------------------------------------------

  savePrescription(){
    let prescriptionData = {
      hospital_id: sessionStorage.getItem('hospital_id'),
      prescription_code: this.prescriptionCode.val(),
      prescription_date: this.prescriptionDate.val(),
      patient_id: this.patientIdStore,
      doctor_id: this.doctorIdStore
    }

    this.prescriptionsApi.putPrescription(prescriptionData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(prescriptionData);
  }

  deletePrescription(){
    console.log("dude... u are gonna delete the prescription?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.prescriptionsApi.deletePrescription()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/prescriptions/all-prescriptions');
          },
          err => {
            console.log(err);
            this.loadingSpinner.httpLoader.close();
            this.connectionNotification.errorNotification.open();
          }
        )
    }
  }

}
