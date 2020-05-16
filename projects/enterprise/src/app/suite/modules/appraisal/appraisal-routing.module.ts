import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppraisalWrapperComponent } from './appraisal-wrapper/appraisal-wrapper.component';
import { AllAppraisalComponent } from './all-appraisal/all-appraisal.component';
import { ViewAppraisalComponent } from './view-appraisal/view-appraisal.component';


const routes: Routes = [
  {
    path: "",
    component: AppraisalWrapperComponent,
    children: [
      { path: "all_appraisal", component: AllAppraisalComponent },
      { path: "view_appraisal", component: ViewAppraisalComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppraisalRoutingModule { }
