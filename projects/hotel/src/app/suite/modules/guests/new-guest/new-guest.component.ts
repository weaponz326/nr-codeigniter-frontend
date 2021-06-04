import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { GuestsApiService } from '../guests-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';

import { GuestFormComponent } from '../guest-form/guest-form.component';


@Component({
  selector: 'app-new-guest',
  templateUrl: './new-guest.component.html',
  styleUrls: ['./new-guest.component.css']
})
export class NewGuestComponent implements OnInit {

  constructor(
    private router: Router,
    private guestsApi: GuestsApiService,
  ) { }

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  @ViewChild('guestFormComponentReference') guestForm: GuestFormComponent;

  navHeading: any[] = [
    { text: "Add Guest", url: "/suite/guests/add-guest" },
  ];

  ngOnInit(): void {
  }

  saveGuest(){
    console.log('u are saving a new guest');
    this.loadingSpinner.httpLoader.open();

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

    console.log(guestData);

    this.guestsApi.postGuest(guestData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();

          if (res.message == "OK"){
            sessionStorage.setItem('guest_id', res.data.id);
            this.router.navigateByUrl('/suite/guests/view-guest');
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
