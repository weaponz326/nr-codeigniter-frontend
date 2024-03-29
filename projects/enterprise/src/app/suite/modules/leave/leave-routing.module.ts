import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllLeaveComponent } from './all-leave/all-leave.component';
import { AddLeaveComponent } from './add-leave/add-leave.component';
import { ViewLeaveComponent } from './view-leave/view-leave.component';
import { LeaveWrapperComponent } from './leave-wrapper/leave-wrapper.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: LeaveWrapperComponent,
    children: [
      { path: "", component: AllLeaveComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-leave", component: AllLeaveComponent },
      { path: "add-leave", component: AddLeaveComponent },
      { path: "view-leave", component: ViewLeaveComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveRoutingModule { }
