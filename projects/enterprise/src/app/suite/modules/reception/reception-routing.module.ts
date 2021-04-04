import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReceptionWrapperComponent } from './reception-wrapper/reception-wrapper.component';
import { AllVisitorsComponent } from './all-visitors/all-visitors.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: ReceptionWrapperComponent,
    children: [
      { path: "", component: AllVisitorsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-visitors", component: AllVisitorsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptionRoutingModule { }
