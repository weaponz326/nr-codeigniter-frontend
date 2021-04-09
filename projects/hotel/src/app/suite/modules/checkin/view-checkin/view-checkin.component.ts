import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { CheckinApiService } from '../checkin-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { CheckinFormComponent } from '../checkin-form/checkin-form.component';


@Component({
  selector: 'app-view-checkin',
  templateUrl: './view-checkin.component.html',
  styleUrls: ['./view-checkin.component.css']
})
export class ViewCheckinComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private checkinApi: CheckinApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('checkinFormComponentReference') checkinForm: CheckinFormComponent;

  navHeading: any[] = [
    { text: "All Check-In", url: "/suite/checkin/all-checkin" },
    { text: "View Check-In", url: "/suite/checkin/view-checkin" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.checkinApi.getSingleCheckin()
      .subscribe(
        res => {
          console.log(res);
          this.checkinForm.checkinCode.val(res.checkin_code);
          this.checkinForm.reservationCode.val(res.reservation_code);
          this.checkinForm.checkinDate.val(res.checkin_date);
          this.checkinForm.checkoutDate.val(res.checkout_date);
          this.checkinForm.numberNights.val(res.number_nights);

        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveCheckin(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a checkin");

    var checkinData = {
      hotel_id: sessionStorage.getItem('hotel_id'),
      checkin_code: this.checkinForm.checkinCode.val(),
      reservation_code: this.checkinForm.checkinCode.val(),
      checkin_date: this.checkinForm.checkinCode.val(),
      checkout_date: this.checkinForm.checkinCode.val(),
      number_nights: this.checkinForm.checkinCode.val(),
    }

    this.checkinApi.putCheckin(checkinData)
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

    console.log(checkinData);
  }

  deleteCheckin(){
    console.log("dude... u are gonna delete the checkin?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.checkinApi.deleteCheckin()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/checkin/all-checkin');
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
