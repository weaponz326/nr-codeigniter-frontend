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
    path: "accounts",
    loadChildren: () => import("./modules/accounts/accounts.module").then(m => m.AccountsModule)
  },
  {
    path: "payroll",
    loadChildren: () => import("./modules/payroll/payroll.module").then(m => m.PayrollModule)
  },
  {
    path: "attendance",
    loadChildren: () => import("./modules/attendance/attendance.module").then(m => m.AttendanceModule)
  },
  {
    path: "assets",
    loadChildren: () => import("./modules/assets/assets.module").then(m => m.AssetsModule)
  },
  {
    path: "leave",
    loadChildren: () => import("./modules/leave/leave.module").then(m => m.LeaveModule)
  },
  {
    path: "budget",
    loadChildren: () => import("./modules/budget/budget.module").then(m => m.BudgetModule)
  },
  {
    path: "procurement",
    loadChildren: () => import("./modules/procurement/procurement.module").then(m => m.ProcurementModule)
  },
  {
    path: "letters",
    loadChildren: () => import("./modules/letters/letters.module").then(m => m.LettersModule)
  },
  {
    path: "appraisal",
    loadChildren: () => import("./modules/appraisal/appraisal.module").then(m => m.AppraisalModule)
  },
  {
    path: "files",
    loadChildren: () => import("./modules/files/files.module").then(m => m.FilesModule)
  },
  {
    path: "employees",
    loadChildren: () => import("./modules/employees/employees.module").then(m => m.EmployeesModule)
  },
  {
    path: "ledger",
    loadChildren: () => import("./modules/ledger/ledger.module").then(m => m.LedgerModule)
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
