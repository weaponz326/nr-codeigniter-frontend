import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { jqxTabsComponent } from 'jqwidgets-ng/jqxtabs';

import { BasicComponent } from '../profile-content/basic/basic.component';
import { LogoComponent } from '../profile-content/logo/logo.component';
import { LocationComponent } from '../profile-content/location/location.component';
import { ContactComponent } from '../profile-content/contact/contact.component';

import { SettingsApiService } from '../settings-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewInit {

  constructor(private settingsApi: SettingsApiService) { }

  @ViewChild('tabReference') tab: jqxTabsComponent;

  @ViewChild('basicComponentReference') basic: BasicComponent;
  @ViewChild('logoReference') logo: LogoComponent;
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
    this.settingsApi.getProfile()
      .subscribe(
        res => {
          console.log(res);
          this.basic.nameInput.val(res.name);
          this.basic.locationInput.val(res.location);
          this.basic.aboutTextArea.val(res.about);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )

    // get extended profile
    // gets additional, location, contact
    this.settingsApi.getExtendedProfile()
      .subscribe(
        res => {
          console.log(res);
          this.location.countryInput.val(res.country);
          this.location.stateInput.val(res.state);
          this.location.cityInput.val(res.city);
          this.contact.phone1Input.val(res.phone1);
          this.contact.phone2Input.val(res.phone2);
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

  sendProfile(data){
    this.loadingSpinner.httpLoader.open();

    this.settingsApi.putProfile(data)
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

  // save basic profile
  saveBasic(basic){
    let basicData = {
      name: basic.name,
      location: basic.location,
      about: basic.about
    }

    this.sendProfile(basicData);
  }

  saveLogo(logo){
    let logoData = {
      logo: logo
    }

    this.sendProfile(logoData);
  }

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

  saveLocation(data){
    let locationData = {
      account: sessionStorage.getItem('restaurant_id'),
      country: data.country,
      state: data.state,
      city: data.city
    }

    this.sendExtended(locationData);
  }

  saveContact(data){
    let contactData = {
      account: sessionStorage.getItem('restaurant_id'),
      phone1: data.phone1,
      phone2: data.phone2,
      email: data.email,
      address: data.address
    }

    this.sendExtended(contactData);
  }

}
