import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { GuestsApiService } from '../guests-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { GuestFormComponent } from '../guest-form/guest-form.component';


@Component({
  selector: 'app-view-guest',
  templateUrl: './view-guest.component.html',
  styleUrls: ['./view-guest.component.css']
})
export class ViewGuestComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private guestsApi: GuestsApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild('guestFormComponentReference') guestForm: GuestFormComponent;

  navHeading: any[] = [
    { text: "All Guests", url: "/suite/guests/all-guests" },
    { text: "View Guest", url: "/suite/guests/view-guest" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.guestsApi.getSingleGuest()
      .subscribe(
        res => {
          console.log(res);
          this.guestForm.guestCode.val(res.guest_code);
          this.guestForm.firstName.val(res.first_name);
          this.guestForm.lastName.val(res.last_name);
          this.guestForm.sex.val(res.sex);
          this.guestForm.phone.val(res.phone);
          this.guestForm.email.val(res.email);
          this.guestForm.address.val(res.address);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  saveGuest(){
    this.loadingSpinner.httpLoader.open();
    console.log("u are updating a guest");

    var guestData = {
      account: sessionStorage.getItem('hotel_id'),
      guest_code: this.guestForm.guestCode.val(),
      first_name: this.guestForm.firstName.val(),
      last_name: this.guestForm.lastName.val(),
      sex: this.guestForm.sex.val(),
      phone: this.guestForm.phone.val(),
      email: this.guestForm.email.val(),
      address: this.guestForm.address.val(),
    }

    this.guestsApi.putGuest(guestData)
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

    console.log(guestData);
  }

  deleteGuest(){
    console.log("dude... u are gonna delete the guest?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.guestsApi.deleteGuest()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/guest/all-guest');
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
