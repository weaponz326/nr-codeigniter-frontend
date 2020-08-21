import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxSchedulerModule } from 'jqwidgets-ng/jqxscheduler';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid'

import { CalendarRoutingModule } from './calendar-routing.module';

import { CalendarWrapperComponent } from './calendar-wrapper/calendar-wrapper.component';
import { ViewCalendarComponent } from './view-calendar/view-calendar.component';
import { AllAppointmentsComponent } from './all-appointments/all-appointments.component';


@NgModule({
  declarations: [
    CalendarWrapperComponent,
    ViewCalendarComponent,
    AllAppointmentsComponent,
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    jqxSchedulerModule,
    jqxButtonModule,
    jqxGridModule
  ]
})
export class CalendarModule { }
