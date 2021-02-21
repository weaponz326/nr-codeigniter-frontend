// routes between major calendar pages

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarWrapperComponent } from './calendar-wrapper/calendar-wrapper.component';
import { ViewCalendarComponent } from './view-calendar/view-calendar.component';
import { AllAppointmentsComponent } from './all-appointments/all-appointments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: CalendarWrapperComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "view-calendar", component: ViewCalendarComponent },
      { path: "all-appointments", component: AllAppointmentsComponent },
      { path: "settings", component: SettingsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
