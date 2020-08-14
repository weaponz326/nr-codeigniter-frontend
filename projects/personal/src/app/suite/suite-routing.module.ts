// main router for suite app
// home page is the default page and is loaded eagerly
// all other module pages are lazy loaded

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  {
    path: "calendar",
    loadChildren: () => import("./modules/calendar/calendar.module").then(m => m.CalendarModule)
  },
  {
    path: "budget",
    loadChildren: () => import("./modules/budget/budget.module").then(m => m.BudgetModule)
  },
  {
    path: "notes",
    loadChildren: () => import("./modules/notes/notes.module").then(m => m.NotesModule)
  },
  {
    path: "accounts",
    loadChildren: () => import("./modules/accounts/accounts.module").then(m => m.AccountsModule)
  },
  {
    path: "tasks",
    loadChildren: () => import("./modules/tasks/tasks.module").then(m => m.TasksModule)
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
