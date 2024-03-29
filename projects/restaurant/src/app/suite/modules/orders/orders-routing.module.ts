import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersWrapperComponent } from './orders-wrapper/orders-wrapper.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: OrdersWrapperComponent,
    children: [
      { path: "", component: AllOrdersComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "settings", component: SettingsComponent },
      { path: "all-orders", component: AllOrdersComponent },
      { path: "view-order", component: ViewOrderComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
