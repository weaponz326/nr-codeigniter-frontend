import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';
import { jqxPanelModule } from 'jqwidgets-ng/jqxpanel';
import { jqxRadioButtonModule } from 'jqwidgets-ng/jqxradiobutton';
import { jqxTabsModule } from 'jqwidgets-ng/jqxtabs';

import { SettingsRoutingModule } from './settings-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { SettingsWrapperComponent } from './settings-wrapper/settings-wrapper.component';
import { ProfileComponent } from './profile/profile.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { BillingsComponent } from './billings/billings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { BasicComponent } from './profile-content/basic/basic.component';
import { LogoComponent } from './profile-content/logo/logo.component';
import { ContactComponent } from './profile-content/contact/contact.component';
import { LocationComponent } from './profile-content/location/location.component';


@NgModule({
  declarations: [
    SettingsWrapperComponent,
    ProfileComponent,
    PrivacyComponent,
    BillingsComponent,
    DashboardComponent,
    SettingsComponent,
    BasicComponent,
    LogoComponent,
    ContactComponent,
    LocationComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    UtilitiesModule,
    DashboardModule,
    jqxButtonModule,
    jqxInputModule,
    jqxComboBoxModule,
    jqxTextAreaModule,
    jqxPanelModule,
    jqxRadioButtonModule,
    jqxTabsModule
  ]
})
export class SettingsModule { }
