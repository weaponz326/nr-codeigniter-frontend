import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';

import { SchedulesRoutingModule } from './schedules-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { SchedulesWrapperComponent } from './schedules-wrapper/schedules-wrapper.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllSchedulesComponent } from './all-schedules/all-schedules.component';
import { NewScheduleComponent } from './new-schedule/new-schedule.component';
import { ViewScheduleComponent } from './view-schedule/view-schedule.component';
import { ScheduleDetailsComponent } from './schedule-details/schedule-details.component';


@NgModule({
  declarations: [
    SchedulesWrapperComponent,
    DashboardComponent,
    SettingsComponent,
    AllSchedulesComponent,
    NewScheduleComponent,
    ViewScheduleComponent,
    ScheduleDetailsComponent
  ],
  imports: [
    CommonModule,
    SchedulesRoutingModule,
    UtilitiesModule,
    DashboardModule,
    jqxButtonModule,
    jqxGridModule,
    jqxWindowModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxComboBoxModule
  ]
})
export class SchedulesModule { }
