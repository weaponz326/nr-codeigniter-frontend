import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllRostersComponent } from './all-rosters/all-rosters.component';
import { RosterWrapperComponent } from './roster-wrapper/roster-wrapper.component';
import { NewRosterComponent } from './new-roster/new-roster.component';
import { ViewRosterComponent } from './view-roster/view-roster.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: RosterWrapperComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-rosters", component: AllRostersComponent },
      { path: "new-roster", component: NewRosterComponent },
      { path: "view-roster", component: ViewRosterComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RosterRoutingModule { }
