import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { environment } from 'projects/hospital/src/environments/environment';

import { DoctorsApiService } from '../doctors-api.service';
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

  constructor(
    private router: Router,
    private doctorsApi: DoctorsApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('doctorFormComponentReference') doctorForm: DoctorFormComponent;

  navHeading: any[] = [
    { text: "All Doctors", url: "/suite/doctors/all-doctors" },
    { text: "View Doctor", url: "/suite/doctors/view-doctor" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.doctorsApi.getSingleDoctor()
      .subscribe(
        res => {
          if (res.date_of_birth != null){
            let dobArray = res.date_of_birth.split('-');
            this.doctorForm.dobYear.val(dobArray[0]);
            this.doctorForm.dobMonth.val(dobArray[1]);
            this.doctorForm.dobDay.val(dobArray[2]);
          }

          if (res.photo != null){
            this.doctorForm.imgSrc = environment.hospitalUrl + res.photo;
          }

          console.log(res);
          this.doctorForm.firstNameInput.val(res.first_name);
          this.doctorForm.lastNameInput.val(res.last_name);
          this.doctorForm.sexDropDownList.val(res.sex);
          this.doctorForm.photo.nativeElement.value = res.photo;
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

    let dob = '';
    if (this.doctorForm.dobYear.val() == '' || this.doctorForm.dobMonth.val() == '' || this.doctorForm.dobDay.val() == '') dob = null;
    else dob = this.doctorForm.dobYear.val() + '-' + this.doctorForm.dobMonth.val() + '-' + this.doctorForm.dobDay.val();    

    var doctorData = {
      account: sessionStorage.getItem('hospital_id'),
      first_name: this.doctorForm.firstNameInput.val(),
      last_name: this.doctorForm.lastNameInput.val(),
      sex: this.doctorForm.sexDropDownList.val(),
      date_of_birth: dob,
      photo: this.doctorForm.image,
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
