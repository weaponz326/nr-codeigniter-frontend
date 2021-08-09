import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';

import { CheckinRoutingModule } from './checkin-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { CheckinWrapperComponent } from './checkin-wrapper/checkin-wrapper.component';
import { AllCheckinComponent } from './all-checkin/all-checkin.component';
import { NewCheckinComponent } from './new-checkin/new-checkin.component';
import { ViewCheckinComponent } from './view-checkin/view-checkin.component';
import { CheckinFormComponent } from './checkin-form/checkin-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    CheckinWrapperComponent,
    AllCheckinComponent,
    NewCheckinComponent,
    ViewCheckinComponent,
    CheckinFormComponent,
    DashboardComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    CheckinRoutingModule,
    UtilitiesModule,
    DashboardModule,
    ChartsModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxNumberInputModule,
    jqxDropDownListModule,
    jqxCheckBoxModule
  ]
})
export class CheckinModule { }
