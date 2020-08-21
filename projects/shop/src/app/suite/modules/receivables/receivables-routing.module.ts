import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceivablesWrapperComponent } from './receivables-wrapper/receivables-wrapper.component';
import { AllReceivablesComponent } from './all-receivables/all-receivables.component';


const routes: Routes = [
  {
    path: "",
    component: ReceivablesWrapperComponent,
    children: [
      { path: "", component: AllReceivablesComponent },
      { path: "all-receivables", component: AllReceivablesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceivablesRoutingModule { }
