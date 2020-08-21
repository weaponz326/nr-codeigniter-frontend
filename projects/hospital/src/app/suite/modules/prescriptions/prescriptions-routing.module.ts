import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrescriptionsWrapperComponent } from './prescriptions-wrapper/prescriptions-wrapper.component';
import { AllPrescriptionsComponent } from './all-prescriptions/all-prescriptions.component';
import { ViewPrescriptionComponent } from './view-prescription/view-prescription.component';


const routes: Routes = [
  {
    path: "",
    component: PrescriptionsWrapperComponent,
    children: [
      { path: "", component: AllPrescriptionsComponent },
      { path: "all-prescriptions", component: AllPrescriptionsComponent },
      { path: "view-prescription", component: ViewPrescriptionComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrescriptionsRoutingModule { }
