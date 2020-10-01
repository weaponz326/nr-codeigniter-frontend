import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxPanelComponent } from 'jqwidgets-ng/jqxpanel';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { SettingsApiService } from '../settings-api.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('firstNameReference') firstNameInput: jqxInputComponent;
  @ViewChild('lastNameReference') lastNameInput: jqxInputComponent;
  @ViewChild('dobReference') dobInput: jqxDateTimeInputComponent;
  @ViewChild('genderReference') genderDropDownList: jqxDropDownListComponent;
  @ViewChild('locationReference') locationInput: jqxInputComponent;
  @ViewChild('aboutReference') aboutTextArea: jqxTextAreaComponent;
  @ViewChild('photoPanelReference') photoPanel: jqxPanelComponent;
  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;

  constructor(private settingsApi: SettingsApiService) { }

  ngOnInit(): void {
  }

  // widgets
  // ---------------------------------------------------------------------------------------

  genderSource: any[] = ['Male', 'Female'];

  saveProfile(){
    console.log("u are updating the profile");

    // update users profile
    let userProfile = {
      location: this.locationInput.val(),
      about: this.aboutTextArea.val(),
      user: {
        first_name: this.firstNameInput.val(),
        last_name: this.lastNameInput.val(),
      }
    }

    this.settingsApi.putUserProfile(userProfile)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      )

    console.log(userProfile);

    // update settings profile
    let settingsProfile = {
      date_of_birth: this.dobInput.val(),
      gender: this.genderDropDownList.val(),
    }

    this.settingsApi.putSettingsProfile(settingsProfile)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      )

    console.log(userProfile);

  }

}
