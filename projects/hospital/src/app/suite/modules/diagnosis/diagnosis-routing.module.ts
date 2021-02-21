import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiagnosisWrapperComponent } from './diagnosis-wrapper/diagnosis-wrapper.component';
import { AllDiagnosisComponent } from './all-diagnosis/all-diagnosis.component';
import { ViewDiagnosisComponent } from './view-diagnosis/view-diagnosis.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: DiagnosisWrapperComponent,
    children: [
      { path: "", component: AllDiagnosisComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-diagnosis", component: AllDiagnosisComponent },
      { path: "view-diagnosis", component: ViewDiagnosisComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiagnosisRoutingModule { }
