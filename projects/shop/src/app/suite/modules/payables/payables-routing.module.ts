import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayablesWrapperComponent } from './payables-wrapper/payables-wrapper.component';
import { AllPayablesComponent } from './all-payables/all-payables.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: PayablesWrapperComponent,
    children: [
      { path: "", component: AllPayablesComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-payables", component: AllPayablesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayablesRoutingModule { }
