import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersWrapperComponent } from './orders-wrapper/orders-wrapper.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';


const routes: Routes = [
  {  
    path: "",
    component: OrdersWrapperComponent,
    children: [
      { path: "all_orders", component: AllOrdersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
