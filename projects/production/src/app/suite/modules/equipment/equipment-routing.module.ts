import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipmentWrapperComponent } from './equipment-wrapper/equipment-wrapper.component';
import { AllEquipmentComponent } from './all-equipment/all-equipment.component';
import { AddEquipmentComponent } from './add-equipment/add-equipment.component';
import { ViewEquipmentComponent } from './view-equipment/view-equipment.component';


const routes: Routes = [
  {
    path: "",
    component: EquipmentWrapperComponent,
    children: [
      { path: "all_equipment", component: AllEquipmentComponent },
      { path: "add_equipment", component: AddEquipmentComponent },
      { path: "view_equipment", component: ViewEquipmentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentRoutingModule { }
