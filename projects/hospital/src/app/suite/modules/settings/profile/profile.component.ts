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
export class ProfileComponent implements OnInit {

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

}
