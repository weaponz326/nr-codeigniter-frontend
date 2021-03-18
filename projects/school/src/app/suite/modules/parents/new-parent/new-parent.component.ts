import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { ParentsApiService } from '../parents-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { ParentFormComponent } from '../parent-form/parent-form.component'


@Component({
  selector: 'app-new-parent',
  templateUrl: './new-parent.component.html',
  styleUrls: ['./new-parent.component.css']
})
export class NewParentComponent implements OnInit {

  constructor(
    private router: Router,
    private parentsApi: ParentsApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('parentFormComponentReference') parentForm: ParentFormComponent;

  navHeading: any[] = [
    { text: "New Parent", url: "/suite/parents/new-parent" },
  ];

  ngOnInit(): void {
  }

  saveParent(){
    console.log('u are saving a new parent');
    this.loadingSpinner.httpLoader.open();

    var parentData = {
      school_id: sessionStorage.getItem('school_id'),
      parent_code: this.parentForm.parentCode.val(),
      first_name: this.parentForm.firstName.val(),
      last_name: this.parentForm.lastName.val(),
      sex: this.parentForm.sex.val(),
      nationality: this.parentForm.nationality.val(),
      religion: this.parentForm.religion.val(),
      occupation: this.parentForm.occupation.val(),
      phone: this.parentForm.phone.val(),
      email: this.parentForm.email.val(),
      address: this.parentForm.address.val(),
      state: this.parentForm.state.val(),
      city: this.parentForm.city.val(),
      post_code: this.parentForm.postCode.val(),
    }

    console.log(parentData);

    this.parentsApi.postParent(parentData)
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
