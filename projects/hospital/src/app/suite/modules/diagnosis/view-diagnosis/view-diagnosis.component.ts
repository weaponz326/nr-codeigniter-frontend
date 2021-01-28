import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { DiagnosisApiService } from '../diagnosis-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { DiagnosisDetailsComponent } from '../diagnosis-details/diagnosis-details.component'
import { SelectPatientComponent } from '../select-patient/select-patient.component'
import { SelectDoctorComponent } from '../select-doctor/select-doctor.component'


@Component({
  selector: 'app-view-diagnosis',
  templateUrl: './view-diagnosis.component.html',
  styleUrls: ['./view-diagnosis.component.css']
})
export class ViewDiagnosisComponent implements OnInit, AfterViewInit {

  @ViewChild('diagnosisCodeReference') diagnosisCode: jqxInputComponent;
  @ViewChild('diagnosisDateReference') diagnosisDate: jqxDateTimeInputComponent;
  @ViewChild('patientNameReference') patientName: jqxInputComponent;
  @ViewChild('patientCodeReference') patientCode: jqxInputComponent;
  @ViewChild('doctorNameReference') doctorName: jqxInputComponent;

  @ViewChild('saveDiagnosisReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteDiagnosisReference') deleteButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild("diagnosisDetailsComponentReference") diagnosisDetails: DiagnosisDetailsComponent;
  @ViewChild("selectPatientComponentReference") selectPatient: SelectPatientComponent;
  @ViewChild("selectDoctorComponentReference") selectDoctor: SelectDoctorComponent;

  // stores db table ids of selected patient and doctor
  // to be retreived for sending to backend
  patientIdStore: any;
  doctorIdStore: any;

  constructor(
    private router: Router,
    private diagnosisApi: DiagnosisApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.diagnosisApi.getSingleDiagnosis()
      .subscribe(
        res => {
          console.log(res);
          this.diagnosisCode.val(res.diagnosis_code);
          this.diagnosisDate.val(res.diagnosis_date);
          this.patientIdStore = res.patient.id;
          this.patientName.val(res.patient.patient_name);
          this.patientCode.val(res.patient.clinical_id);
          this.doctorIdStore = res.doctor.id;
          this.doctorName.val(res.doctor.doctor_name);
          this.diagnosisDetails.bloodGroup.val(res.blood_group);
          this.diagnosisDetails.temperature.val(res.temperature);
          this.diagnosisDetails.weight.val(res.weight);
          this.diagnosisDetails.height.val(res.height);
          this.diagnosisDetails.bloodPressure.val(res.blood_pressure);
          this.diagnosisDetails.pulse.val(res.pulse);
          this.diagnosisDetails.diagnosisDetail.val(res.diagnosis_detail);
          this.diagnosisDetails.treatment.val(res.treatment);
          this.diagnosisDetails.remarks.val(res.remarks);
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

  saveDiagnosis(){
    let diagnosisData = {
      hospital_id: sessionStorage.getItem('hospital_id'),
      lab_code: this.diagnosisCode.val(),
      lab_date: this.diagnosisDate.val(),
      patient_id: this.patientIdStore,
      doctor_id: this.doctorIdStore,
      blood_group: this.diagnosisDetails.bloodGroup.val(),
      temperature: this.diagnosisDetails.temperature.val(),
      weight: this.diagnosisDetails.weight.val(),
      height: this.diagnosisDetails.height.val(),
      blood_pressure: this.diagnosisDetails.bloodPressure.val(),
      pulse: this.diagnosisDetails.pulse.val(),
      diagnosis_detail: this.diagnosisDetails.diagnosisDetail.val(),
      treatment: this.diagnosisDetails.treatment.val(),
      remarks: this.diagnosisDetails.remarks.val(),
    }

    this.diagnosisApi.putDiagnosis(diagnosisData)
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

    console.log(diagnosisData);
  }

  deleteDiagnosis(){
    console.log("dude... u are gonna delete the lab?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.diagnosisApi.deleteDiagnosis()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/diagnosis/all-diagnosis');
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
