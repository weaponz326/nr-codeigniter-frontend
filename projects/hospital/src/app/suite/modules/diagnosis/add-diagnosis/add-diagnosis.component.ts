import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';

import { DiagnosisApiService } from '../diagnosis-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { SelectPatientComponent } from '../select-patient/select-patient.component'


@Component({
  selector: 'app-add-diagnosis',
  templateUrl: './add-diagnosis.component.html',
  styleUrls: ['./add-diagnosis.component.css']
})
export class AddDiagnosisComponent implements OnInit {

  constructor(
    private router: Router,
    private diagnosisApi: DiagnosisApiService,
  ) { }

  @ViewChild("addDiagnosisReference") addDiagnosis: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild('diagnosisCodeReference') diagnosisCode: jqxInputComponent;
  @ViewChild('diagnosisDateReference') diagnosisDate: jqxDateTimeInputComponent;
  @ViewChild('patientNameReference') patientName: jqxInputComponent;
  @ViewChild('patientCodeReference') patientCode: jqxInputComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild("selectPatientComponentReference") selectPatient: SelectPatientComponent;

  patientIdStore: any;

  ngOnInit(): void {
  }

  openWindow(){
    this.addDiagnosis.open();
  }

  patientSelected(patient: any){
    console.log(patient);

    this.patientName.val(patient.patient_name);
    this.patientCode.val(patient.clinical_id);
    this.patientIdStore = patient.id;
  }

  saveDiagnosis(){
    this.loadingSpinner.httpLoader.open();

    let diagnosisData = {
      hospital_id: localStorage.getItem('hospital_id'),
      diagnosis_code: this.diagnosisCode.val(),
      diagnosis_date: this.diagnosisDate.val(),
      patient: this.patientIdStore
    }

    this.diagnosisApi.postDiagnosis(diagnosisData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.status == true){
            sessionStorage.setItem('diagnosis_id', res.diagnosis_id);
            this.router.navigateByUrl('/suite/diagnosis/view-diagnosis');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(diagnosisData);
  }

}
