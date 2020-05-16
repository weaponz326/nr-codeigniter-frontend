import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcurementWrapperComponent } from './procurement-wrapper/procurement-wrapper.component';
import { AllProcurementComponent } from './all-procurement/all-procurement.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';


const routes: Routes = [
  {
    path: "",
    component: ProcurementWrapperComponent,
    children: [
      { path: "all_procurement", component: AllProcurementComponent },
      { path: "new_order", component: NewOrderComponent },
      { path: "view_order", component: ViewOrderComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcurementRoutingModule { }