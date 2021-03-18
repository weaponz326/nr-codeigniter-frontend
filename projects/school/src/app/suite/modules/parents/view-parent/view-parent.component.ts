import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { ParentsApiService } from '../parents-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { ParentFormComponent } from '../parent-form/parent-form.component'


@Component({
  selector: 'app-view-parent',
  templateUrl: './view-parent.component.html',
  styleUrls: ['./view-parent.component.css']
})
export class ViewParentComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private parentsApi: ParentsApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('parentFormComponentReference') parentForm: ParentFormComponent;

  navHeading: any[] = [
    { text: "All Parents", url: "/suite/parents/all-parents" },
    { text: "View Parent", url: "/suite/parents/view-parent" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.parentsApi.getSingleParent()
      .subscribe(
        res => {
          console.log(res);
          this.parentForm.parentCode.val(res.parent_code);
          this.parentForm.firstName.val(res.first_name);
          this.parentForm.lastName.val(res.last_name);
          this.parentForm.sex.val(res.sex);
          this.parentForm.nationality.val(res.nationality);
          this.parentForm.religion.val(res.religion);
          this.parentForm.occupation.val(res.occupation);
          this.parentForm.phone.val(res.phone);
          this.parentForm.email.val(res.email);
          this.parentForm.address.val(res.address);
          this.parentForm.state.val(res.state);
          this.parentForm.city.val(res.city);
          this.parentForm.postCode.val(res.post_code);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveParent(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a parent");

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

    this.parentsApi.putParent(parentData)
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

    console.log(parentData);
  }

  deleteParent(){
    console.log("dude... u are gonna delete the parent?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.parentsApi.deleteParent()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/parents/all-parents');
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
