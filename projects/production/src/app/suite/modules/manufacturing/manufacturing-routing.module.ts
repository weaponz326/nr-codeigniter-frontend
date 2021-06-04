import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManufacturingWrapperComponent } from './manufacturing-wrapper/manufacturing-wrapper.component';
import { AllManufacturingComponent } from './all-manufacturing/all-manufacturing.component';
import { NewManufacturingComponent } from './new-manufacturing/new-manufacturing.component';
import { ViewManufacturingComponent } from './view-manufacturing/view-manufacturing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: ManufacturingWrapperComponent,
    children: [
      { path: "", component: AllManufacturingComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-manufacturing", component: AllManufacturingComponent },
      { path: "new-manufacturing", component: NewManufacturingComponent },
      { path: "view-manufacturing", component: ViewManufacturingComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManufacturingRoutingModule { }
