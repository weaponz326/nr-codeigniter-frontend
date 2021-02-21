import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientsWrapperComponent } from './patients-wrapper/patients-wrapper.component';
import { AllPatientsComponent } from './all-patients/all-patients.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: PatientsWrapperComponent,
    children: [
      { path: "", component: AllPatientsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-patients", component: AllPatientsComponent },
      { path: "new-patient", component: NewPatientComponent },
      { path: "view-patient", component: ViewPatientComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
