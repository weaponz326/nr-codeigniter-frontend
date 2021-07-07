import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  {
    path: "admin",
    loadChildren: () => import("./modules/admin/admin.module").then(m => m.AdminModule)
  },
  {
    path: "menu",
    loadChildren: () => import("./modules/menu/menu.module").then(m => m.MenuModule)
  },
  {
    path: "staff",
    loadChildren: () => import("./modules/staff/staff.module").then(m => m.StaffModule)
  },
  {
    path: "tables",
    loadChildren: () => import("./modules/tables/tables.module").then(m => m.TablesModule)
  },
  {
    path: "orders",
    loadChildren: () => import("./modules/orders/orders.module").then(m => m.OrdersModule)
  },
  {
    path: "deliveries",
    loadChildren: () => import("./modules/deliveries/deliveries.module").then(m => m.DeliveriesModule)
  },
  {
    path: "payments",
    loadChildren: () => import("./modules/payments/payments.module").then(m => m.PaymentsModule)
  },
  {
    path: "reservations",
    loadChildren: () => import("./modules/reservations/reservations.module").then(m => m.ReservationsModule)
  },
  {
    path: "customers",
    loadChildren: () => import("./modules/customers/customers.module").then(m => m.CustomersModule)
  },
  {
    path: "sittings",
    loadChildren: () => import("./modules/sittings/sittings.module").then(m => m.SittingsModule)
  },
  {
    path: "stock",
    loadChildren: () => import("./modules/stock/stock.module").then(m => m.StockModule)
  },  
  {
    path: "roster",
    loadChildren: () => import("./modules/roster/roster.module").then(m => m.RosterModule)
  },
  {
    path: "portal",
    loadChildren: () => import("./modules/portal/portal.module").then(m => m.PortalModule)
  },
  {
    path: "settings",
    loadChildren: () => import("./modules/settings/settings.module").then(m => m.SettingsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuiteRoutingModule { }
