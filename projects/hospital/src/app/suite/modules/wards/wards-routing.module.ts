import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WardsWrapperComponent } from './wards-wrapper/wards-wrapper.component';

import { AllWardsComponent } from './all-wards/all-wards.component';
import { NewWardComponent } from './new-ward/new-ward.component';
import { ViewWardComponent } from './view-ward/view-ward.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: WardsWrapperComponent,
    children: [
      { path: "", component: AllWardsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-wards", component: AllWardsComponent },
      { path: "new-ward", component: NewWardComponent },
      { path: "view-ward", component: ViewWardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WardsRoutingModule { }
