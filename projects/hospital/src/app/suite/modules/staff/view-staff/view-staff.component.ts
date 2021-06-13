import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { environment } from 'projects/hospital/src/environments/environment';

import { StaffApiService } from '../staff-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { StaffFormComponent } from '../staff-form/staff-form.component';

@Component({
  selector: 'app-view-staff',
  templateUrl: './view-staff.component.html',
  styleUrls: ['./view-staff.component.css']
})
export class ViewStaffComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private staffApi: StaffApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('staffFormComponentReference') staffForm: StaffFormComponent;

  navHeading: any[] = [
    { text: "All Staff", url: "/suite/staff/all-staff" },
    { text: "View Staff", url: "/suite/staff/view-staff" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.staffApi.getSingleStaff()
      .subscribe(
        res => {
          if (res.date_of_birth != null){
            let dobArray = res.date_of_birth.split('-');
            this.staffForm.dobYear.val(dobArray[0]);
            this.staffForm.dobMonth.val(dobArray[1]);
            this.staffForm.dobDay.val(dobArray[2]);
          }

          if (res.photo != null){
            this.staffForm.imgSrc = environment.hospitalUrl + res.photo;
          }

          console.log(res);
          this.staffForm.firstNameInput.val(res.first_name);
          this.staffForm.lastNameInput.val(res.last_name);
          this.staffForm.sexDropDownList.val(res.sex);
          this.staffForm.photo.nativeElement.value = res.photo;
          this.staffForm.nationalityInput.val(res.nationality);
          this.staffForm.religionInput.val(res.religion);
          this.staffForm.phoneInput.val(res.phone);
          this.staffForm.emailInput.val(res.email);
          this.staffForm.addressInput.val(res.address);
          this.staffForm.stateInput.val(res.state);
          this.staffForm.cityInput.val(res.city);
          this.staffForm.postCodeInput.val(res.post_code);
          this.staffForm.staffCodeInput.val(res.staff_code);
          this.staffForm.departmentInput.val(res.department);
          this.staffForm.jobInput.val(res.job);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveStaff(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a staff");

    let dob = '';
    if (this.staffForm.dobYear.val() == '' || this.staffForm.dobMonth.val() == '' || this.staffForm.dobDay.val() == '') dob = null;
    else dob = this.staffForm.dobYear.val() + '-' + this.staffForm.dobMonth.val() + '-' + this.staffForm.dobDay.val();    

    var staffData = {
      account: sessionStorage.getItem('hospital_id'),
      first_name: this.staffForm.firstNameInput.val(),
      last_name: this.staffForm.lastNameInput.val(),
      sex: this.staffForm.sexDropDownList.val(),
      date_of_birth: dob,
      photo: this.staffForm.image,
      nationality: this.staffForm.nationalityInput.val(),
      religion: this.staffForm.religionInput.val(),
      phone: this.staffForm.phoneInput.val(),
      email: this.staffForm.emailInput.val(),
      address: this.staffForm.addressInput.val(),
      state: this.staffForm.stateInput.val(),
      city: this.staffForm.cityInput.val(),
      post_code: this.staffForm.postCodeInput.val(),
      staff_code: this.staffForm.staffCodeInput.val(),
      department: this.staffForm.departmentInput.val(),
      job: this.staffForm.jobInput.val(),
    }

    this.staffApi.putStaff(staffData)
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

    console.log(staffData);
  }

  deleteStaff(){
    console.log("dude... u are gonna delete the staff?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.staffApi.deleteStaff()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/staff/all-staff');
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
