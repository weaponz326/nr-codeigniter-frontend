import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffWrapperComponent } from './staff-wrapper/staff-wrapper.component';
import { AllStaffComponent } from './all-staff/all-staff.component';
import { NewStaffComponent } from './new-staff/new-staff.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: StaffWrapperComponent,
    children: [
      { path: "", component: AllStaffComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "settings", component: SettingsComponent },
      { path: "all-staff", component: AllStaffComponent },
      { path: "new-staff", component: NewStaffComponent },
      { path: "view-staff", component: ViewStaffComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
