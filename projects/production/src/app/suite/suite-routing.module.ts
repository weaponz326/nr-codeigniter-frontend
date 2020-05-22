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
    path: "stock",
    loadChildren: () => import("./modules/stock/stock.module").then(m => m.StockModule)
  },
  {
    path: "equipment",
    loadChildren: () => import("./modules/equipment/equipment.module").then(m => m.EquipmentModule)
  },
  {
    path: "products",
    loadChildren: () => import("./modules/products/products.module").then(m => m.ProductsModule)
  },
  {
    path: "purchasing",
    loadChildren: () => import("./modules/purchasing/purchasing.module").then(m => m.PurchasingModule)
  },
  {
    path: "contractors",
    loadChildren: () => import("./modules/contractors/contractors.module").then(m => m.ContractorsModule)
  },
  {
    path: "workers",
    loadChildren: () => import("./modules/workers/workers.module").then(m => m.WorkersModule)
  },
  {
    path: "planning",
    loadChildren: () => import("./modules/planning/planning.module").then(m => m.PlanningModule)
  },
  {
    path: "orders",
    loadChildren: () => import("./modules/orders/orders.module").then(m => m.OrdersModule)
  },
  {
    path: "manufacturing",
    loadChildren: () => import("./modules/manufacturing/manufacturing.module").then(m => m.ManufacturingModule)
  },
  {
    path: "portal",
    loadChildren: () => import("./modules/portal/portal.module").then(m => m.PortalModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuiteRoutingModule { }
