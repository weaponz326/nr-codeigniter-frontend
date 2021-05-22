import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExecutivesWrapperComponent } from './executives-wrapper/executives-wrapper.component';
import { AllExecutivesComponent } from './all-executives/all-executives.component';
import { NewExecutiveComponent } from './new-executive/new-executive.component';
import { ViewExecutiveComponent } from './view-executive/view-executive.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: ExecutivesWrapperComponent,
    children: [
      { path: "", component: AllExecutivesComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-executives", component: AllExecutivesComponent },
      { path: "new-executive", component: NewExecutiveComponent },
      { path: "view-executive", component: ViewExecutiveComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExecutivesRoutingModule { }
