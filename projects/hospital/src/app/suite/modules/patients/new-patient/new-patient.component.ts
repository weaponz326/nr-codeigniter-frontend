import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { PatientsApiService } from '../patients-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { PatientFormComponent } from '../patient-form/patient-form.component'

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('patientFormComponentReference') patientForm: PatientFormComponent;

  constructor(
    private router: Router,
    private patientsApi: PatientsApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  ngOnInit(): void {
  }

  savePatient(){
    console.log('u are saving a new patient');
    this.loadingSpinner.httpLoader.open();

    var patientData = {
      hospital_id: sessionStorage.getItem('hospital_id'),
      first_name: this.patientForm.firstNameInput.val(),
      last_name: this.patientForm.lastNameInput.val(),
      sex: this.patientForm.sexDropDownList.val(),
      date_of_birth: this.patientForm.dobInput.val(),
      nationality: this.patientForm.nationalityInput.val(),
      religion: this.patientForm.religionInput.val(),
      occupation: this.patientForm.occupationInput.val(),
      phone: this.patientForm.phoneInput.val(),
      email: this.patientForm.emailInput.val(),
      address: this.patientForm.addressInput.val(),
      state: this.patientForm.stateInput.val(),
      city: this.patientForm.cityInput.val(),
      post_code: this.patientForm.postCodeInput.val(),
      clinical_number: this.patientForm.clinicalNumberInput.val(),
      insurance_type: this.patientForm.insuranceTypeInput.val(),
      insurance_number: this.patientForm.insuranceNumberInput.val(),
    }

    console.log(patientData);

    this.patientsApi.postPatient(patientData)
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
  }

}
