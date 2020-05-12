import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssessmentWrapperComponent } from './assessment-wrapper/assessment-wrapper.component';
import { AllAssessmentComponent } from './all-assessment/all-assessment.component';
import { ViewAssessmentComponent } from './view-assessment/view-assessment.component';


const routes: Routes = [
  {
    path: "",
    component: AssessmentWrapperComponent,
    children: [
      { path: "all_assessment", component: AllAssessmentComponent },
      { path: "view_assessment", component: ViewAssessmentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssessmentRoutingModule { }
