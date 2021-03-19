import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceivablesWrapperComponent } from './receivables-wrapper/receivables-wrapper.component';
import { AllReceivablesComponent } from './all-receivables/all-receivables.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: ReceivablesWrapperComponent,
    children: [
      { path: "", component: AllReceivablesComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-receivables", component: AllReceivablesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceivablesRoutingModule { }
