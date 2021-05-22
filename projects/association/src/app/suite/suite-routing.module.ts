import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path: "members",
    loadChildren: () => import("./modules/members/members.module").then(m => m.MembersModule)
  },
  {
    path: "committees",
    loadChildren: () => import("./modules/committees/committees.module").then(m => m.CommitteesModule)
  },
  {
    path: "dues",
    loadChildren: () => import("./modules/dues/dues.module").then(m => m.DuesModule)
  },
  {
    path: "executives",
    loadChildren: () => import("./modules/executives/executives.module").then(m => m.ExecutivesModule)
  },
  {
    path: "action-plan",
    loadChildren: () => import("./modules/action-plan/action-plan.module").then(m => m.ActionPlanModule)
  },
  {
    path: "budget",
    loadChildren: () => import("./modules/budget/budget.module").then(m => m.BudgetModule)
  },
  {
    path: "attendance",
    loadChildren: () => import("./modules/attendance/attendance.module").then(m => m.AttendanceModule)
  },
  {
    path: "meetings",
    loadChildren: () => import("./modules/meetings/meetings.module").then(m => m.MeetingsModule)
  },
  {
    path: "groups",
    loadChildren: () => import("./modules/groups/groups.module").then(m => m.GroupsModule)
  },
  {
    path: "year",
    loadChildren: () => import("./modules/year/year.module").then(m => m.YearModule)
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
