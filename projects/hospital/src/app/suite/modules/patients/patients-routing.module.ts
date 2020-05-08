import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientsWrapperComponent } from './patients-wrapper/patients-wrapper.component';
import { AllPatientsComponent } from './all-patients/all-patients.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { NewPatientComponent } from './new-patient/new-patient.component';


const routes: Routes = [
  {
    path: "",
    component: PatientsWrapperComponent,
    children: [
      { path: "all_patients", component: AllPatientsComponent },
      { path: "new_patient", component: NewPatientComponent },
      { path: "view_patient", component: ViewPatientComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
