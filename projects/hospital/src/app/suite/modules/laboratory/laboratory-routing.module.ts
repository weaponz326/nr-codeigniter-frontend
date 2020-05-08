import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaboratoryWrapperComponent } from './laboratory-wrapper/laboratory-wrapper.component';
import { AllLabsComponent } from './all-labs/all-labs.component';
import { ViewLabComponent } from './view-lab/view-lab.component';


const routes: Routes = [
  {
    path: "",
    component: LaboratoryWrapperComponent,
    children: [
      { path: "all_labs", component: AllLabsComponent },
      { path: "view_lab", component: ViewLabComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaboratoryRoutingModule { }
