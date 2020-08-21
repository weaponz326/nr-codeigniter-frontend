import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LedgerWrapperComponent } from './ledger-wrapper/ledger-wrapper.component';
import { AllLedgerComponent } from './all-ledger/all-ledger.component';
import { ViewLedgerComponent } from './view-ledger/view-ledger.component';


const routes: Routes = [
  {
    path: "",
    component: LedgerWrapperComponent,
    children: [
      { path: "", component: AllLedgerComponent },
      { path: "all-ledger", component: AllLedgerComponent },
      { path: "view-ledger", component: ViewLedgerComponent }
    ]    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LedgerRoutingModule { }
