import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaboratoryWrapperComponent } from './laboratory-wrapper/laboratory-wrapper.component';
import { AllLabsComponent } from './all-labs/all-labs.component';
import { ViewLabComponent } from './view-lab/view-lab.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: LaboratoryWrapperComponent,
    children: [
      { path: "", component: AllLabsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-labs", component: AllLabsComponent },
      { path: "view-lab", component: ViewLabComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaboratoryRoutingModule { }
