import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SchedulesWrapperComponent } from './schedules-wrapper/schedules-wrapper.component';
import { AllSchedulesComponent } from './all-schedules/all-schedules.component';
import { ViewScheduleComponent } from './view-schedule/view-schedule.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: SchedulesWrapperComponent,
    children: [
      { path: "", component: AllSchedulesComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-schedules", component: AllSchedulesComponent },
      { path: "view-schedule", component: ViewScheduleComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchedulesRoutingModule { }
