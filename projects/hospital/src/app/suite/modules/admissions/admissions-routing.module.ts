import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmissionsWrapperComponent } from './admissions-wrapper/admissions-wrapper.component';
import { AllAdmissionsComponent } from './all-admissions/all-admissions.component';
import { NewAdmissionComponent } from './new-admission/new-admission.component';
import { ViewAdmissionComponent } from './view-admission/view-admission.component';


const routes: Routes = [
  {
    path: "",
    component: AdmissionsWrapperComponent,
    children: [
      { path: "", component: AllAdmissionsComponent },
      { path: "all-admissions", component: AllAdmissionsComponent },
      { path: "new-admission", component: NewAdmissionComponent },
      { path: "view-admission", component: ViewAdmissionComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionsRoutingModule { }
