import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventoryWrapperComponent } from './inventory-wrapper/inventory-wrapper.component';
import { AllInventoryComponent } from './all-inventory/all-inventory.component';


const routes: Routes = [
  {
    path: "",
    component: InventoryWrapperComponent,
    children: [
      { path: "all_inventory", component: AllInventoryComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
