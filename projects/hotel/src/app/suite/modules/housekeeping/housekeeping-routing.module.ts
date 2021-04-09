import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HousekeepingWrapperComponent } from './housekeeping-wrapper/housekeeping-wrapper.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllHousekeepingComponent } from './all-housekeeping/all-housekeeping.component';
import { ViewHousekeepingComponent } from './view-housekeeping/view-housekeeping.component';


const routes: Routes = [
  {
    path: "",
    component: HousekeepingWrapperComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: 'all-housekeeping', component: AllHousekeepingComponent },
      { path: 'view-housekeeping', component: ViewHousekeepingComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HousekeepingRoutingModule { }
