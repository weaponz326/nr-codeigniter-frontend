import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { PatientsApiService } from '../patients-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { PatientFormComponent } from '../patient-form/patient-form.component'

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private patientsApi: PatientsApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('patientFormComponentReference') patientForm: PatientFormComponent;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.patientsApi.getSinglePatient()
      .subscribe(
        res => {
          console.log(res);
          this.patientForm.firstNameInput.val(res.first_name);
          this.patientForm.lastNameInput.val(res.last_name);
          this.patientForm.sexDropDownList.val(res.sex);
          this.patientForm.dobInput.val(res.date_of_birth);
          this.patientForm.nationalityInput.val(res.nationality);
          this.patientForm.religionInput.val(res.religion);
          this.patientForm.occupationInput.val(res.occupation);
          this.patientForm.phoneInput.val(res.phone);
          this.patientForm.emailInput.val(res.email);
          this.patientForm.addressInput.val(res.address);
          this.patientForm.stateInput.val(res.state);
          this.patientForm.cityInput.val(res.city);
          this.patientForm.postCodeInput.val(res.post_code);
          this.patientForm.clinicalNumberInput.val(res.clinical_number);
          this.patientForm.insuranceTypeInput.val(res.insurance_type);
          this.patientForm.insuranceNumberInput.val(res.insurance_number);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  savePatient(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a patient");

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

    this.patientsApi.putPatient(patientData)
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

    console.log(patientData);
  }

  deletePatient(){
    console.log("dude... u are gonna delete the patient?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.patientsApi.deletePatient()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/patients/all-patients');
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
