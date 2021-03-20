import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { DoctorsApiService } from '../doctors-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { DoctorFormComponent } from '../doctor-form/doctor-form.component'


@Component({
  selector: 'app-new-doctor',
  templateUrl: './new-doctor.component.html',
  styleUrls: ['./new-doctor.component.css']
})
export class NewDoctorComponent implements OnInit {

  constructor(
    private router: Router,
    private doctorsApi: DoctorsApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('doctorFormComponentReference') doctorForm: DoctorFormComponent;

  navHeading: any[] = [
    { text: "New Doctor", url: "/suite/doctors/new-doctor" },
  ];

  ngOnInit(): void {
  }

  saveDoctor(){
    console.log('u are saving a new doctor');
    this.loadingSpinner.httpLoader.open();

    var doctorData = {
      hospital_id: sessionStorage.getItem('hospital_id'),
      first_name: this.doctorForm.firstNameInput.val(),
      last_name: this.doctorForm.lastNameInput.val(),
      sex: this.doctorForm.sexDropDownList.val(),
      date_of_birth: this.doctorForm.dobInput.val(),
      nationality: this.doctorForm.nationalityInput.val(),
      religion: this.doctorForm.religionInput.val(),
      phone: this.doctorForm.phoneInput.val(),
      email: this.doctorForm.emailInput.val(),
      address: this.doctorForm.addressInput.val(),
      state: this.doctorForm.stateInput.val(),
      city: this.doctorForm.cityInput.val(),
      post_code: this.doctorForm.postCodeInput.val(),
      doctor_code: this.doctorForm.doctorCodeInput.val(),
      department: this.doctorForm.departmentInput.val(),
      speciality: this.doctorForm.specialityInput.val(),
      work_status: this.doctorForm.workStatusDropDownList.val(),
      started_work: this.doctorForm.startedWorkDateInput.val(),
      ended_work: this.doctorForm.endedWorkDateInput.val(),
    }

    console.log(doctorData);

    this.doctorsApi.postDoctor(doctorData)
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
