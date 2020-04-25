import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BudgetWrapperComponent } from './budget-wrapper/budget-wrapper.component';
import { AllBudgetComponent } from './all-budget/all-budget.component';
import { ViewBudgetComponent } from './view-budget/view-budget.component';


const routes: Routes = [
  { 
    path: "", 
    component: BudgetWrapperComponent,
    children: [
      { path: "all_budget", component: AllBudgetComponent },
      { path: "view_budget", component: ViewBudgetComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule { }
