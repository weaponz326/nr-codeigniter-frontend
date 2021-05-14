import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { WardsApiService } from '../wards-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { WardFormComponent } from '../ward-form/ward-form.component';


@Component({
  selector: 'app-new-ward',
  templateUrl: './new-ward.component.html',
  styleUrls: ['./new-ward.component.css']
})
export class NewWardComponent implements OnInit {

  constructor(private router: Router, private wardsApi: WardsApiService) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('wardFormComponentReference') wardForm: WardFormComponent;

  navHeading: any[] = [
    { text: "New Ward", url: "/suite/wards/new-ward" },
  ];

  ngOnInit(): void {
  }

  saveWard(){
    console.log('u are saving a new staff');
    this.loadingSpinner.httpLoader.open();

    var wardData = {
      account: sessionStorage.getItem('hospital_id'),
      ward_number: this.wardForm.wardNumber.val(),
      ward_name: this.wardForm.wardName.val(),
      ward_type: this.wardForm.wardType.val(),
      location: this.wardForm.location.val(),
      capacity: this.wardForm.capacity.val(),
    }

    console.log(wardData);

    this.wardsApi.postWard(wardData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.message == "OK"){
            sessionStorage.setItem('ward_id', res.data.id);
            this.router.navigateByUrl('/suite/wards/view-ward');
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
