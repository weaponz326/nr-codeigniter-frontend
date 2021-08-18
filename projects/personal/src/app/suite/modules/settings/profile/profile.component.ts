import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { jqxTabsComponent } from 'jqwidgets-ng/jqxtabs';

import { BasicComponent } from '../profile-content/basic/basic.component';
import { AdditionalComponent } from '../profile-content/additional/additional.component';
import { PhotoComponent } from '../profile-content/photo/photo.component';
import { LocationComponent } from '../profile-content/location/location.component';
import { ContactComponent } from '../profile-content/contact/contact.component';

import { SettingsApiService } from '../settings-api.service';
import { LoadingSpinnerComponent } from '../../../utilities/loading-spinner/loading-spinner.component';
import { ConnectionNotificationComponent } from '../../../utilities/connection-notification/connection-notification.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewInit {

  constructor(private settingsApi: SettingsApiService) { }

  @ViewChild('tabReference') tab: jqxTabsComponent;

  @ViewChild('basicComponentReference') basic: BasicComponent;
  @ViewChild('addtionalComponentReference') additional: AdditionalComponent;
  @ViewChild('photoComponentReference') photo: PhotoComponent;
  @ViewChild('locationComponentReference') location: LocationComponent;
  @ViewChild('contactComponentReference') contact: ContactComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "Profile", url: "/suite/settings/profile" },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // get basic profile
    // gets both user and profile
    this.settingsApi.getUser()
      .subscribe(
        res => {
          console.log(res);
          this.basic.firstNameInput.val(res.first_name);
          this.basic.lastNameInput.val(res.last_name);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )

    this.settingsApi.getProfile()
      .subscribe(
        res => {
          console.log(res);
          this.basic.locationInput.val(res.location);
          this.basic.aboutTextArea.val(res.about);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )

    // get extended profile
    this.settingsApi.getExtendedProfile()
      .subscribe(
        res => {
          console.log(res);
          this.additional.dobInput.val(res.date_of_birth);
          this.additional.genderDropDownList.val(res.gender);
          this.location.countryInput.val(res.country);
          this.location.stateInput.val(res.state);
          this.location.cityInput.val(res.city);
          this.contact.phoneInput.val(res.phone);
          this.contact.emailInput.val(res.email);
          this.contact.addressTextArea.val(res.address);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  // saving profile
  // --------------------------------------------------------------------------------------------------------------------

  // save basic profile
  sendUser(user){
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
  }

  sendProfile(profile){
    this.loadingSpinner.httpLoader.open();

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

  // user and profile are sent seperately
  saveBasic(basic){
    let user = {
      first_name: basic.first_name,
      last_name: basic.last_name
    }

    let profile = {
      location: basic.location,
      about: basic.about
    }

    this.sendUser(user);
    this.sendProfile(profile);
  }

  savePhoto(photo){
    this.sendProfile(photo);

  }

  // extended profile

  sendExtended(data){
    this.loadingSpinner.httpLoader.open();

    this.settingsApi.postExtendedProfile(data)
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

  saveAdditional(data){
    let additionalData = {
      user: localStorage.getItem('personal_id'),
      gender: data.gender,
      date_of_birth: data.date_of_birth
    }

    this.sendExtended(additionalData);
  }

  saveLocation(data){
    let locationData = {
      user: localStorage.getItem('personal_id'),
      country: data.country,
      state: data.state,
      city: data.city
    }

    this.sendExtended(locationData);
  }

  saveContact(data){
    let contactData = {
      user: localStorage.getItem('personal_id'),
      phone: data.phone,
      email: data.email,
      address: data.address
    }

    this.sendExtended(contactData);
  }

}
