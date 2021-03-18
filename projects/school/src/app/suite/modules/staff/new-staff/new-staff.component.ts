import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { StaffApiService } from '../staff-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { StaffFormComponent } from '../staff-form/staff-form.component';


@Component({
  selector: 'app-new-staff',
  templateUrl: './new-staff.component.html',
  styleUrls: ['./new-staff.component.css']
})
export class NewStaffComponent implements OnInit {

  constructor(
    private router: Router,
    private staffApi: StaffApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('staffFormComponentReference') staffForm: StaffFormComponent;

  navHeading: any[] = [
    { text: "New Staff", url: "/suite/staff/new-staff" },
  ];

  ngOnInit(): void {
  }

  saveStaff(){
    console.log('u are saving a new staff');
    this.loadingSpinner.httpLoader.open();

    var staffData = {
      hospital_id: sessionStorage.getItem('school_id'),
      first_name: this.staffForm.firstNameInput.val(),
      last_name: this.staffForm.lastNameInput.val(),
      sex: this.staffForm.sexDropDownList.val(),
      date_of_birth: this.staffForm.dobInput.val(),
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

    console.log(staffData);

    this.staffApi.postStaff(staffData)
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
