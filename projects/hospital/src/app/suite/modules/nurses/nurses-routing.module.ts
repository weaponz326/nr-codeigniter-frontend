import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NursesWrapperComponent } from './nurses-wrapper/nurses-wrapper.component';
import { AllNursesComponent } from './all-nurses/all-nurses.component';
import { NewNurseComponent } from './new-nurse/new-nurse.component';
import { ViewNurseComponent } from './view-nurse/view-nurse.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: NursesWrapperComponent,
    children: [
      { path: "", component: AllNursesComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-nurses", component: AllNursesComponent },
      { path: "new-nurse", component: NewNurseComponent },
      { path: "view-nurse", component: ViewNurseComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NursesRoutingModule { }
