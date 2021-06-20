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
    path: "bills",
    loadChildren: () => import("./modules/bills/bills.module").then(m => m.BillsModule)
  },
  {
    path: "staff",
    loadChildren: () => import("./modules/staff/staff.module").then(m => m.StaffModule)
  },
  {
    path: "guests",
    loadChildren: () => import("./modules/guests/guests.module").then(m => m.GuestsModule)
  },
  {
    path: "payments",
    loadChildren: () => import("./modules/payments/payments.module").then(m => m.PaymentsModule)
  },
  {
    path: "services",
    loadChildren: () => import("./modules/services/services.module").then(m => m.ServicesModule)
  },
  {
    path: "checkin",
    loadChildren: () => import("./modules/checkin/checkin.module").then(m => m.CheckinModule)
  },
  {
    path: "bookings",
    loadChildren: () => import("./modules/bookings/bookings.module").then(m => m.BookingsModule)
  },
  {
    path: "rooms",
    loadChildren: () => import("./modules/rooms/rooms.module").then(m => m.RoomsModule)
  },
  {
    path: "assets",
    loadChildren: () => import("./modules/assets/assets.module").then(m => m.AssetsModule)
  },
  {
    path: "housekeeping",
    loadChildren: () => import("./modules/housekeeping/housekeeping.module").then(m => m.HousekeepingModule)
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
