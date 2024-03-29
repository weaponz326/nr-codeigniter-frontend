import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { ChartsModule } from 'ng2-charts';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';
import { jqxPasswordInputModule } from 'jqwidgets-ng/jqxpasswordinput';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { jqxPanelModule } from 'jqwidgets-ng/jqxpanel';
import { jqxTabsModule } from 'jqwidgets-ng/jqxtabs';

import { SettingsRoutingModule } from './settings-routing.module';
import { UtilitiesModule } from '../../utilities/utilities.module';
import { DashboardModule } from '../../dashboard/dashboard.module';

import { SettingsWrapperComponent } from './settings-wrapper/settings-wrapper.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { BasicComponent } from './profile-content/basic/basic.component';
import { AdditionalComponent } from './profile-content/additional/additional.component';
import { PhotoComponent } from './profile-content/photo/photo.component';
import { LocationComponent } from './profile-content/location/location.component';
import { ContactComponent } from './profile-content/contact/contact.component';
import { GeneralComponent } from './general/general.component';
import { SecurityComponent } from './security/security.component';


@NgModule({
  declarations: [
    SettingsWrapperComponent,
    ProfileComponent,
    DashboardComponent,
    SettingsComponent,
    BasicComponent,
    AdditionalComponent,
    PhotoComponent,
    LocationComponent,
    ContactComponent,
    GeneralComponent,
    SecurityComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    UtilitiesModule,
    DashboardModule,
    ChartsModule,
    jqxButtonModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxDropDownListModule,
    jqxTextAreaModule,
    jqxPasswordInputModule,
    jqxComboBoxModule,
    jqxPanelModule,
    jqxTabsModule
  ]
})
export class SettingsModule { }
