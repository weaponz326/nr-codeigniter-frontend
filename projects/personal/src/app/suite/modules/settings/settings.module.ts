import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';
import { jqxPanelModule } from 'jqwidgets-ng/jqxpanel';

import { SettingsRoutingModule } from './settings-routing.module';

import { SettingsWrapperComponent } from './settings-wrapper/settings-wrapper.component';
import { ViewSettingsComponent } from './view-settings/view-settings.component';
import { ProfileComponent } from './profile/profile.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { GeneralComponent } from './general/general.component';


@NgModule({
  declarations: [
    SettingsWrapperComponent,
    ViewSettingsComponent,
    ProfileComponent,
    PrivacyComponent,
    GeneralComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    jqxButtonModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxDropDownListModule,
    jqxTextAreaModule,
    jqxPanelModule,
  ]
})
export class SettingsModule { }
