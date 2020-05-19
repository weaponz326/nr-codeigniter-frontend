import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayablesWrapperComponent } from './payables-wrapper/payables-wrapper.component';
import { AllPayablesComponent } from './all-payables/all-payables.component';


const routes: Routes = [
  {
    path: "",
    component: PayablesWrapperComponent,
    children: [
      { path: "all_payables", component: AllPayablesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayablesRoutingModule { }
