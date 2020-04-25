// routes between major calendar pages

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarWrapperComponent } from './calendar-wrapper/calendar-wrapper.component';
import { ViewCalendarComponent } from './view-calendar/view-calendar.component';
import { AllAppointmentsComponent } from './all-appointments/all-appointments.component';


const routes: Routes = [
  {
    path: "",
    component: CalendarWrapperComponent,
    children: [
      { path: "view_calendar", component: ViewCalendarComponent },
      { path: "all_appointments", component: AllAppointmentsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
