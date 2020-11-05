import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { SettingsApiService } from '../settings-api.service';
import { LoadingSpinnerComponent } from '../../../utilities/loading-spinner/loading-spinner.component';
import { ConnectionNotificationComponent } from '../../../utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewInit {

  @ViewChild('firstNameReference') firstNameInput: jqxInputComponent;
  @ViewChild('lastNameReference') lastNameInput: jqxInputComponent;
  @ViewChild('locationReference') locationInput: jqxInputComponent;
  @ViewChild('aboutReference') aboutTextArea: jqxTextAreaComponent;
  @ViewChild('saveBasicButtonReference') saveBasicButton: jqxButtonComponent;
  @ViewChild('dobReference') dobInput: jqxDateTimeInputComponent;
  @ViewChild('genderReference') genderDropDownList: jqxDropDownListComponent;
  @ViewChild('saveAdditionalButtonReference') saveAdditionalButton: jqxButtonComponent;
  @ViewChild('countryReference') countryInput: jqxComboBoxComponent;
  @ViewChild('stateReference') stateInput: jqxComboBoxComponent;
  @ViewChild('cityReference') cityInput: jqxComboBoxComponent;
  @ViewChild('addressReference') addressTextArea: jqxTextAreaComponent;
  @ViewChild('saveLocationButtonReference') saveLocationButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  constructor(private settingsApi: SettingsApiService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.settingsApi.getBasicProfile()
      .subscribe(
        res => {
          console.log(res);
          this.firstNameInput.val(res.user.first_name);
          this.lastNameInput.val(res.user.last_name);
          this.locationInput.val(res.location);
          this.aboutTextArea.val(res.about);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )

    this.settingsApi.getAdditionalProfile()
      .subscribe(
        res => {
          console.log(res);
          this.dobInput.val(new Date(res.date_of_birth));
          this.genderDropDownList.val(res.gender);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )

    this.settingsApi.getLocationDetails()
      .subscribe(
        res => {
          console.log(res);
          this.countryInput.val(res.country);
          this.stateInput.val(res.state);
          this.cityInput.val(res.city);
          this.addressTextArea.val(res.address);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  // widgets
  // ---------------------------------------------------------------------------------------

  genderSource: any[] = ['Male', 'Female'];

  saveBasicProfile(){
    console.log("u are updating the profile");

    // user and profile are updated seperately
    // cos drf can't update nested serializers
    let user = {
      first_name: this.firstNameInput.val(),
      last_name: this.lastNameInput.val()
    }

    let profile = {
      location: this.locationInput.val(),
      about: this.aboutTextArea.val()
    }

    this.loadingSpinner.httpLoader.open();

    this.settingsApi.putUser(user)
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

    this.settingsApi.putProfile(profile)
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

  saveAdditionalProfile(){
    let profile = {
      user: localStorage.getItem('personal_id'),
      gender: this.genderDropDownList.val(),
      date_of_birth: this.dobInput.val()
    }

    this.loadingSpinner.httpLoader.open();

    this.settingsApi.postAdditionalProfile(profile)
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

  saveLocationDetails(){
    let location = {
      user: localStorage.getItem('personal_id'),
      country: this.countryInput.val(),
      state: this.stateInput.val(),
      city: this.cityInput.val(),
      address: this.addressTextArea.val(),
    }

    this.loadingSpinner.httpLoader.open();

    this.settingsApi.postLocationDetails(location)
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
