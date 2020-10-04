import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManufacturingWrapperComponent } from './manufacturing-wrapper/manufacturing-wrapper.component';
import { AllManufacturingComponent } from './all-manufacturing/all-manufacturing.component';


const routes: Routes = [
  {
    path: "",
    component: ManufacturingWrapperComponent,
    children: [
      { path: "", component: AllManufacturingComponent },
      { path: "all-manufacturing", component: AllManufacturingComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManufacturingRoutingModule { }
