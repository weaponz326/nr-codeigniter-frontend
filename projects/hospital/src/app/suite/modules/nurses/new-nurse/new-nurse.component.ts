import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { NursesApiService } from '../nurses-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { NurseFormComponent } from '../nurse-form/nurse-form.component'

@Component({
  selector: 'app-new-nurse',
  templateUrl: './new-nurse.component.html',
  styleUrls: ['./new-nurse.component.css']
})
export class NewNurseComponent implements OnInit {

  constructor(
    private router: Router,
    private nursesApi: NursesApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('nurseFormComponentReference') nurseForm: NurseFormComponent;

  navHeading: any[] = [
    { text: "New Nurses", url: "/suite/nurses/new-nurse" },
  ];

  ngOnInit(): void {
  }

  saveNurse(){
    console.log('u are saving a new nurse');
    this.loadingSpinner.httpLoader.open();

    let dob = '';
    if (this.nurseForm.dobYear.val() == '' || this.nurseForm.dobMonth.val() == '' || this.nurseForm.dobDay.val() == '') dob = null;
    else dob = this.nurseForm.dobYear.val() + '-' + this.nurseForm.dobMonth.val() + '-' + this.nurseForm.dobDay.val();

    var nurseData = {
      account: sessionStorage.getItem('hospital_id'),
      first_name: this.nurseForm.firstNameInput.val(),
      last_name: this.nurseForm.lastNameInput.val(),
      sex: this.nurseForm.sexDropDownList.val(),
      date_of_birth: dob,
      photo: this.nurseForm.image,
      nationality: this.nurseForm.nationalityInput.val(),
      religion: this.nurseForm.religionInput.val(),
      phone: this.nurseForm.phoneInput.val(),
      email: this.nurseForm.emailInput.val(),
      address: this.nurseForm.addressInput.val(),
      state: this.nurseForm.stateInput.val(),
      city: this.nurseForm.cityInput.val(),
      post_code: this.nurseForm.postCodeInput.val(),
      nurse_code: this.nurseForm.nurseCodeInput.val(),
      department: this.nurseForm.departmentInput.val(),
    }

    console.log(nurseData);

    this.nursesApi.postNurse(nurseData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.message == "OK"){
            sessionStorage.setItem('nurse_id', res.data.id);
            this.router.navigateByUrl('/suite/nurses/view-nurse');
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
