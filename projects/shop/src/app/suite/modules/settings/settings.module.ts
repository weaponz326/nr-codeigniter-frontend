import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';
import { jqxPanelModule } from 'jqwidgets-ng/jqxpanel';
import { jqxRadioButtonModule } from 'jqwidgets-ng/jqxradiobutton';

import { SettingsRoutingModule } from './settings-routing.module';

import { SettingsWrapperComponent } from './settings-wrapper/settings-wrapper.component';
import { ViewSettingsComponent } from './view-settings/view-settings.component';
import { ProfileComponent } from './profile/profile.component';
import { GeneralComponent } from './general/general.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { BillingsComponent } from './billings/billings.component';


@NgModule({
  declarations: [
    SettingsWrapperComponent,
    ViewSettingsComponent,
    ProfileComponent,
    GeneralComponent,
    PrivacyComponent,
    BillingsComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    jqxButtonModule,
    jqxInputModule,
    jqxComboBoxModule,
    jqxTextAreaModule,
    jqxPanelModule,
    jqxRadioButtonModule
  ]
})
export class SettingsModule { }
