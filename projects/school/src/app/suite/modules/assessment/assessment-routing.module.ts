import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssessmentWrapperComponent } from './assessment-wrapper/assessment-wrapper.component';
import { AllAssessmentComponent } from './all-assessment/all-assessment.component';
import { NewAssessmentComponent } from './new-assessment/new-assessment.component';
import { ViewAssessmentComponent } from './view-assessment/view-assessment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: AssessmentWrapperComponent,
    children: [
      { path: "", component: AllAssessmentComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-assessment", component: AllAssessmentComponent },
      { path: "new-assessment", component: NewAssessmentComponent },
      { path: "view-assessment", component: ViewAssessmentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssessmentRoutingModule { }
