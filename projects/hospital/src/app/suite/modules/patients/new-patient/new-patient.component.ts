import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { PatientsApiService } from '../patients-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { PatientFormComponent } from '../patient-form/patient-form.component'

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent implements OnInit {

  constructor(
    private router: Router,
    private patientsApi: PatientsApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('patientFormComponentReference') patientForm: PatientFormComponent;

  navHeading: any[] = [
    { text: "New Patient", url: "/suite/patients/new-patient" },
  ];

  ngOnInit(): void {
  }

  savePatient(){
    console.log('u are saving a new patient');
    this.loadingSpinner.httpLoader.open();

    let dob = '';
    if (this.patientForm.dobYear.val() == '' || this.patientForm.dobMonth.val() == '' || this.patientForm.dobDay.val() == '') dob = null;
    else dob = this.patientForm.dobYear.val() + '-' + this.patientForm.dobMonth.val() + '-' + this.patientForm.dobDay.val();

    var patientData = {
      account: sessionStorage.getItem('hospital_id'),
      first_name: this.patientForm.firstNameInput.val(),
      last_name: this.patientForm.lastNameInput.val(),
      sex: this.patientForm.sexDropDownList.val(),
      date_of_birth: dob,
      photo: this.patientForm.photo.nativeElement.value,
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
          console.log(res.data);
          if (res.message == "OK"){
            sessionStorage.setItem('patient_id', res.data.id);
            this.router.navigateByUrl('/suite/patients/view-patient');
          }
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )
  }

}
