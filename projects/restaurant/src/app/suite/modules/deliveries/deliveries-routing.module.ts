import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveriesWrapperComponent } from './deliveries-wrapper/deliveries-wrapper.component';
import { AllDeliveriesComponent } from './all-deliveries/all-deliveries.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: DeliveriesWrapperComponent,
    children: [
      { path: "", component: AllDeliveriesComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "settings", component: SettingsComponent },
      { path: "all-deliveries", component: AllDeliveriesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveriesRoutingModule { }
