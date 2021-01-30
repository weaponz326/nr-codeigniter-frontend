import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { WardsApiService } from '../wards-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { WardFormComponent } from '../ward-form/ward-form.component';


@Component({
  selector: 'app-view-ward',
  templateUrl: './view-ward.component.html',
  styleUrls: ['./view-ward.component.css']
})
export class ViewWardComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private wardsApi: WardsApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('wardFormComponentReference') wardForm: WardFormComponent;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.wardsApi.getSingleWard()
      .subscribe(
        res => {
          console.log(res);
          this.wardForm.wardNumber.val(res.ward_number);
          this.wardForm.wardName.val(res.ward_name);
          this.wardForm.wardType.val(res.ward_type);
          this.wardForm.capacity.val(res.capacity);
          this.wardForm.location.val(res.location);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveWard(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a staff");

    var wardData = {
      hospital_id: sessionStorage.getItem('hospital_id'),
      ward_number: this.wardForm.wardNumber.val(),
      ward_name: this.wardForm.wardName.val(),
      ward_type: this.wardForm.wardType.val(),
      location: this.wardForm.location.val(),
      capacity: this.wardForm.capacity.val(),
    }

    this.wardsApi.putWard(wardData)
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

    console.log(wardData);
  }

  deleteWard(){
    console.log("dude... u are gonna delete the staff?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.wardsApi.deleteWard()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/wards/all-wards');
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
