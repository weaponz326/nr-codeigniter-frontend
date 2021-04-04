import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcurementWrapperComponent } from './procurement-wrapper/procurement-wrapper.component';
import { AllProcurementComponent } from './all-procurement/all-procurement.component';
import { NewProcurementComponent } from './new-procurement/new-procurement.component';
import { ViewProcurementComponent } from './view-procurement/view-procurement.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: ProcurementWrapperComponent,
    children: [
      { path: "", component: AllProcurementComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-procurement", component: AllProcurementComponent },
      { path: "new-procurement", component: NewProcurementComponent },
      { path: "view-procurement", component: ViewProcurementComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcurementRoutingModule { }
