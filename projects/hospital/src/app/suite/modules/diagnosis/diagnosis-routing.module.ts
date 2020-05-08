import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiagnosisWrapperComponent } from './diagnosis-wrapper/diagnosis-wrapper.component';
import { AllDiagnosisComponent } from './all-diagnosis/all-diagnosis.component';
import { ViewDiagnosisComponent } from './view-diagnosis/view-diagnosis.component';


const routes: Routes = [
  {
    path: "",
    component: DiagnosisWrapperComponent,
    children: [
      { path: "all_diagnosis", component: AllDiagnosisComponent },
      { path: "view_diagnosis", component: ViewDiagnosisComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiagnosisRoutingModule { }
