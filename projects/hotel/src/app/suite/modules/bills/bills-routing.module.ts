import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillsWrapperComponent } from './bills-wrapper/bills-wrapper.component';
import { AllBillsComponent } from './all-bills/all-bills.component';
import { ViewBillComponent } from './view-bill/view-bill.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: BillsWrapperComponent,
    children: [
      { path: "", component: AllBillsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-bills", component: AllBillsComponent },
      { path: "view-bill", component: ViewBillComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillsRoutingModule { }
