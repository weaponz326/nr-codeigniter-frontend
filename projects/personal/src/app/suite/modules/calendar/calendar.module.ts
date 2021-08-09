import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxSchedulerModule } from 'jqwidgets-ng/jqxscheduler';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid'

import { ChartsModule } from 'ng2-charts';
import { CalendarRoutingModule } from './calendar-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { CalendarWrapperComponent } from './calendar-wrapper/calendar-wrapper.component';
import { ViewCalendarComponent } from './view-calendar/view-calendar.component';
import { AllAppointmentsComponent } from './all-appointments/all-appointments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    CalendarWrapperComponent,
    ViewCalendarComponent,
    AllAppointmentsComponent,
    DashboardComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    UtilitiesModule,
    DashboardModule,
    ChartsModule,
    jqxSchedulerModule,
    jqxButtonModule,
    jqxGridModule
  ]
})
export class CalendarModule { }
