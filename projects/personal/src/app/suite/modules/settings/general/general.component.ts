import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxPasswordInputComponent } from 'jqwidgets-ng/jqxpasswordinput';

import { SettingsApiService } from '../settings-api.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  constructor(private settingsApi: SettingsApiService) { }

  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('accountEmailInputReference') accountEmailInput: jqxInputComponent;
  @ViewChild('backupEmailInputReference') backupEmailInput: jqxInputComponent;
  @ViewChild('phoneInputReference') phoneInput: jqxInputComponent;
  @ViewChild('saveContactButtonReference') saveEmailButton: jqxButtonComponent;
  @ViewChild('oldPasswordInputReference') oldPasswordInput: jqxPasswordInputComponent;
  @ViewChild('newPasswordInputReference') newPasswordInput: jqxPasswordInputComponent;
  @ViewChild('confirmPasswordInputReference') confirmPasswordInput: jqxPasswordInputComponent;
  @ViewChild('savePasswordButtonReference') savePasswordButton: jqxButtonComponent;

  ngOnInit(): void {
  }

}
