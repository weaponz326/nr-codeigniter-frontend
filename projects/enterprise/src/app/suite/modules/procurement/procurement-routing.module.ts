import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcurementWrapperComponent } from './procurement-wrapper/procurement-wrapper.component';
import { AllProcurementComponent } from './all-procurement/all-procurement.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
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
      { path: "new-order", component: NewOrderComponent },
      { path: "view-order", component: ViewOrderComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcurementRoutingModule { }
