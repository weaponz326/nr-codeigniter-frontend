import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanningWrapperComponent } from './planning-wrapper/planning-wrapper.component';
import { AllPlanningComponent } from './all-planning/all-planning.component';
import { ViewPlanComponent } from './view-plan/view-plan.component';


const routes: Routes = [
  {
    path: "",
    component: PlanningWrapperComponent,
    children: [
      { path: "all_planning", component: AllPlanningComponent },
      { path: "view_plan", component: ViewPlanComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanningRoutingModule { }
