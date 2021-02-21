import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SittingsWrapperComponent } from './sittings-wrapper/sittings-wrapper.component';
import { AllSittingsComponent } from './all-sittings/all-sittings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: SittingsWrapperComponent,
    children: [
      { path: "", component: AllSittingsComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "settings", component: SettingsComponent },
      { path: "all-sittings", component: AllSittingsComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SittingsRoutingModule { }
