import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipmentWrapperComponent } from './equipment-wrapper/equipment-wrapper.component';
import { AllEquipmentComponent } from './all-equipment/all-equipment.component';
import { AddEquipmentComponent } from './add-equipment/add-equipment.component';
import { ViewEquipmentComponent } from './view-equipment/view-equipment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: EquipmentWrapperComponent,
    children: [
      { path: "", component: AllEquipmentComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-equipment", component: AllEquipmentComponent },
      { path: "add-equipment", component: AddEquipmentComponent },
      { path: "view-equipment", component: ViewEquipmentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentRoutingModule { }
