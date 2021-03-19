import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventoryWrapperComponent } from './inventory-wrapper/inventory-wrapper.component';
import { AllInventoryComponent } from './all-inventory/all-inventory.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: InventoryWrapperComponent,
    children: [
      { path: "", component: AllInventoryComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-inventory", component: AllInventoryComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
