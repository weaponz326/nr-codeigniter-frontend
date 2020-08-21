import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashflowWrapperComponent } from './cashflow-wrapper/cashflow-wrapper.component';
import { AllCashflowComponent } from './all-cashflow/all-cashflow.component';
import { ViewSheetComponent } from './view-sheet/view-sheet.component';


const routes: Routes = [
  {
    path: "",
    component: CashflowWrapperComponent,
    children: [
      { path: "", component: AllCashflowComponent },
      { path: "all-cashflow", component: AllCashflowComponent },
      { path: "view-sheet", component: ViewSheetComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashflowRoutingModule { }
