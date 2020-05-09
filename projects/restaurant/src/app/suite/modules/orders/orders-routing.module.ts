import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersWrapperComponent } from './orders-wrapper/orders-wrapper.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { ViewOrderComponent } from './view-order/view-order.component';


const routes: Routes = [
  {
    path: "",
    component: OrdersWrapperComponent,
    children: [
      { path: "all_orders", component: AllOrdersComponent },
      { path: "view_order", component: ViewOrderComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
