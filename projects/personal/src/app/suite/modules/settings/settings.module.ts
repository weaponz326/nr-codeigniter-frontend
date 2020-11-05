import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';
import { jqxPasswordInputModule } from 'jqwidgets-ng/jqxpasswordinput';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';

import { SettingsRoutingModule } from './settings-routing.module';
import { UtilitiesModule } from '../../utilities/utilities.module';

import { SettingsWrapperComponent } from './settings-wrapper/settings-wrapper.component';
import { ViewSettingsComponent } from './view-settings/view-settings.component';
import { ProfileComponent } from './profile/profile.component';
import { GeneralComponent } from './general/general.component';
import { SecurityComponent } from './security/security.component';


@NgModule({
  declarations: [
    SettingsWrapperComponent,
    ViewSettingsComponent,
    ProfileComponent,
    GeneralComponent,
    SecurityComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    UtilitiesModule,
    jqxButtonModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxDropDownListModule,
    jqxTextAreaModule,
    jqxPasswordInputModule,
    jqxComboBoxModule,
  ]
})
export class SettingsModule { }
