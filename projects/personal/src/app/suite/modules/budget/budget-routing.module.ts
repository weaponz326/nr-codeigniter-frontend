import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BudgetWrapperComponent } from './budget-wrapper/budget-wrapper.component';
import { AllBudgetComponent } from './all-budget/all-budget.component';
import { ViewBudgetComponent } from './view-budget/view-budget.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: BudgetWrapperComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "all-budget", component: AllBudgetComponent },
      { path: "view-budget", component: ViewBudgetComponent },
      { path: "settings", component: SettingsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule { }
