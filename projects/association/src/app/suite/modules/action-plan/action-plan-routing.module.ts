import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActionPlanWrapperComponent } from './action-plan-wrapper/action-plan-wrapper.component';
import { AllPlansComponent } from './all-plans/all-plans.component';
import { ViewPlanComponent } from './view-plan/view-plan.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: ActionPlanWrapperComponent,
    children: [
      { path: "", component: AllPlansComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-plans", component: AllPlansComponent },
      { path: "view-plan", component: ViewPlanComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActionPlanRoutingModule { }
