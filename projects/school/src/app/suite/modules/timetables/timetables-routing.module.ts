import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TimetablesWrapperComponent } from './timetables-wrapper/timetables-wrapper.component';
import { AllTimetablesComponent } from './all-timetables/all-timetables.component';
import { FullTimetableComponent } from './full-timetable/full-timetable.component';
import { ClassTimetableComponent } from './class-timetable/class-timetable.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: TimetablesWrapperComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-timetables", component: AllTimetablesComponent },
      { path: "full-timetable", component: FullTimetableComponent },
      { path: "class-timetable", component: ClassTimetableComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimetablesRoutingModule { }
