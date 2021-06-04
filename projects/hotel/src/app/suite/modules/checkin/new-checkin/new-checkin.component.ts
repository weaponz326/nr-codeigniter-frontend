import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { CheckinApiService } from '../checkin-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { CheckinFormComponent } from '../checkin-form/checkin-form.component';


@Component({
  selector: 'app-new-checkin',
  templateUrl: './new-checkin.component.html',
  styleUrls: ['./new-checkin.component.css']
})
export class NewCheckinComponent implements OnInit {

  constructor(
    private router: Router,
    private checkinApi: CheckinApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('checkinFormComponentReference') checkinForm: CheckinFormComponent;

  navHeading: any[] = [
    { text: "new Check-In", url: "/suite/checkin/new-checkin" },
  ];

  ngOnInit(): void {
  }

  saveCheckin(){
    console.log('u are saving a new checkin');
    this.loadingSpinner.httpLoader.open();

    var checkinData = {
      account: sessionStorage.getItem('hotel_id'),
      checkin_code: this.checkinForm.checkinCode.val(),
      checkin_date: this.checkinForm.checkinDate.val(),
      checkout_date: this.checkinForm.checkoutDate.val(),
      number_nights: this.checkinForm.numberNights.val(),
    }

    console.log(checkinData);

    this.checkinApi.postCheckin(checkinData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.message == "OK"){
            sessionStorage.setItem('checkin_id', res.data.id);
            this.router.navigateByUrl('/suite/checkin/view-checkin');
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
