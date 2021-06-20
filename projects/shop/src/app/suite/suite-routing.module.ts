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
    path: "receivables",
    loadChildren: () => import("./modules/receivables/receivables.module").then(m => m.ReceivablesModule)
  },
  {
    path: "products",
    loadChildren: () => import("./modules/products/products.module").then(m => m.ProductsModule)
  },
  {
    path: "invoice",
    loadChildren: () => import("./modules/invoice/invoice.module").then(m => m.InvoiceModule)
  },
  {
    path: "marketting",
    loadChildren: () => import("./modules/marketting/marketting.module").then(m => m.MarkettingModule)
  },
  {
    path: "payables",
    loadChildren: () => import("./modules/payables/payables.module").then(m => m.PayablesModule)
  },
  {
    path: "sales",
    loadChildren: () => import("./modules/sales/sales.module").then(m => m.SalesModule)
  },
  {
    path: "customers",
    loadChildren: () => import("./modules/customers/customers.module").then(m => m.CustomersModule)
  },
  {
    path: "payments",
    loadChildren: () => import("./modules/payments/payments.module").then(m => m.PaymentsModule)
  },
  {
    path: "orders",
    loadChildren: () => import("./modules/orders/orders.module").then(m => m.OrdersModule)
  },
  {
    path: "inventory",
    loadChildren: () => import("./modules/inventory/inventory.module").then(m => m.InventoryModule)
  },
  {
    path: "purchasing",
    loadChildren: () => import("./modules/purchasing/purchasing.module").then(m => m.PurchasingModule)
  },
  {
    path: "staff",
    loadChildren: () => import("./modules/staff/staff.module").then(m => m.StaffModule)
  },
  {
    path: "suppliers",
    loadChildren: () => import("./modules/suppliers/suppliers.module").then(m => m.SuppliersModule)
  },
  {
    path: "cashflow",
    loadChildren: () => import("./modules/cashflow/cashflow.module").then(m => m.CashflowModule)
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
