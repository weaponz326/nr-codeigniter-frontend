import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllSalesComponent } from './all-sales/all-sales.component';
import { SalesWrapperComponent } from './sales-wrapper/sales-wrapper.component';


const routes: Routes = [
  {
    path: "",
    component: SalesWrapperComponent,
    children: [
      { path: "", component: AllSalesComponent }
      { path: "all-sales", component: AllSalesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
