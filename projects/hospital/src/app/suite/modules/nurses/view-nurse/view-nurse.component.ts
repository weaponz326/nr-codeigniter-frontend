import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { NursesApiService } from '../nurses-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { NurseFormComponent } from '../nurse-form/nurse-form.component'


@Component({
  selector: 'app-view-nurse',
  templateUrl: './view-nurse.component.html',
  styleUrls: ['./view-nurse.component.css']
})
export class ViewNurseComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private nursesApi: NursesApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('nurseFormComponentReference') nurseForm: NurseFormComponent;

  navHeading: any[] = [
    { text: "All Nurses", url: "/suite/nurses/all-nurses" },
    { text: "View Nurse", url: "/suite/nurses/view-nurse" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.nursesApi.getSingleNurse()
      .subscribe(
        res => {
          console.log(res);
          this.nurseForm.firstNameInput.val(res.first_name);
          this.nurseForm.lastNameInput.val(res.last_name);
          this.nurseForm.sexDropDownList.val(res.sex);
          this.nurseForm.dobInput.val(res.date_of_birth);
          this.nurseForm.nationalityInput.val(res.nationality);
          this.nurseForm.religionInput.val(res.religion);
          this.nurseForm.phoneInput.val(res.phone);
          this.nurseForm.emailInput.val(res.email);
          this.nurseForm.addressInput.val(res.address);
          this.nurseForm.stateInput.val(res.state);
          this.nurseForm.cityInput.val(res.city);
          this.nurseForm.postCodeInput.val(res.post_code);
          this.nurseForm.nurseCodeInput.val(res.nurse_code);
          this.nurseForm.departmentInput.val(res.department);
          this.nurseForm.workStatusDropDownList.val(res.work_status);
          this.nurseForm.startedWorkDateInput.val(res.started_work);
          this.nurseForm.endedWorkDateInput.val(res.ended_work);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveNurse(){
    console.log('u are saving a new nurse');
    this.loadingSpinner.httpLoader.open();

    var nurseData = {
      hospital_id: sessionStorage.getItem('hospital_id'),
      first_name: this.nurseForm.firstNameInput.val(),
      last_name: this.nurseForm.lastNameInput.val(),
      sex: this.nurseForm.sexDropDownList.val(),
      date_of_birth: this.nurseForm.dobInput.val(),
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
      work_status: this.nurseForm.workStatusDropDownList.val(),
      started_work: this.nurseForm.startedWorkDateInput.val(),
      ended_work: this.nurseForm.endedWorkDateInput.val(),
    }

    console.log(nurseData);

    this.nursesApi.putNurse(nurseData)
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

  deleteNurse(){
    console.log("dude... u are gonna delete the nurse?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.nursesApi.deleteNurse()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/nurses/all-nurses');
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
