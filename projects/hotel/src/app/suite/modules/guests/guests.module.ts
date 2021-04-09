import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';

import { GuestsRoutingModule } from './guests-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { GuestsWrapperComponent } from './guests-wrapper/guests-wrapper.component';
import { AllGuestsComponent } from './all-guests/all-guests.component';
import { NewGuestComponent } from './new-guest/new-guest.component';
import { ViewGuestComponent } from './view-guest/view-guest.component';
import { GuestFormComponent } from './guest-form/guest-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    GuestsWrapperComponent,
    AllGuestsComponent,
    NewGuestComponent,
    ViewGuestComponent,
    GuestFormComponent,
    DashboardComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    GuestsRoutingModule,
    UtilitiesModule,
    DashboardModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDropDownListModule,
    jqxTextAreaModule
  ]
})
export class GuestsModule { }
