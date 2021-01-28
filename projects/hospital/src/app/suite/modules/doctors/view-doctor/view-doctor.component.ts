import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { DoctorsApiService } from '../doctors-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { DoctorFormComponent } from '../doctor-form/doctor-form.component'


@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css']
})
export class ViewDoctorComponent implements OnInit, AfterViewInit {

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('doctorFormComponentReference') doctorForm: DoctorFormComponent;

  constructor(
    private router: Router,
    private doctorsApi: DoctorsApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.doctorsApi.getSingleDoctor()
      .subscribe(
        res => {
          console.log(res);
          this.doctorForm.firstNameInput.val(res.first_name);
          this.doctorForm.lastNameInput.val(res.last_name);
          this.doctorForm.sexDropDownList.val(res.sex);
          this.doctorForm.dobInput.val(res.date_of_birth);
          this.doctorForm.nationalityInput.val(res.nationality);
          this.doctorForm.religionInput.val(res.religion);
          this.doctorForm.phoneInput.val(res.phone);
          this.doctorForm.emailInput.val(res.email);
          this.doctorForm.addressInput.val(res.address);
          this.doctorForm.stateInput.val(res.state);
          this.doctorForm.cityInput.val(res.city);
          this.doctorForm.postCodeInput.val(res.post_code);
          this.doctorForm.doctorCodeInput.val(res.doctor_code);
          this.doctorForm.departmentInput.val(res.department);
          this.doctorForm.specialityInput.val(res.speciality);
          this.doctorForm.workStatusDropDownList.val(res.work_status);
          this.doctorForm.startedWorkDateInput.val(res.started_work);
          this.doctorForm.endedWorkDateInput.val(res.ended_work);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveDoctor(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a doctor");

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

    this.doctorsApi.putDoctor(doctorData)
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

    console.log(doctorData);
  }

  deleteDoctor(){
    console.log("dude... u are gonna delete the doctor?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.doctorsApi.deleteDoctor()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/doctors/all-doctors');
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
