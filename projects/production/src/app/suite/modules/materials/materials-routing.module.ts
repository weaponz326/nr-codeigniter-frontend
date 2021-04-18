import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterialsWrapperComponent } from './materials-wrapper/materials-wrapper.component';
import { AllMaterialsComponent } from './all-materials/all-materials.component';
import { AddMaterialComponent } from './add-material/add-material.component';
import { ViewMaterialComponent } from './view-material/view-material.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: MaterialsWrapperComponent,
    children: [
      { path: "", component: AllMaterialsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-materials", component: AllMaterialsComponent },
      { path: "add-material", component: AddMaterialComponent },
      { path: "view-material", component: ViewMaterialComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialsRoutingModule { }
