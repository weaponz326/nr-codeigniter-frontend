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
    path: "projects",
    loadChildren: () => import("./modules/projects/projects.module").then(m => m.ProjectsModule)
  },
  {
    path: "tasks",
    loadChildren: () => import("./modules/tasks/tasks.module").then(m => m.TasksModule)
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
    path: "schedules",
    loadChildren: () => import("./modules/schedules/schedules.module").then(m => m.SchedulesModule)
  },
  {
    path: "roster",
    loadChildren: () => import("./modules/roster/roster.module").then(m => m.RosterModule)
  },
  {
    path: "materials",
    loadChildren: () => import("./modules/materials/materials.module").then(m => m.MaterialsModule)
  },
  {
    path: "staff",
    loadChildren: () => import("./modules/staff/staff.module").then(m => m.StaffModule)
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
