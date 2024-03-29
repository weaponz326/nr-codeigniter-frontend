import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentsWrapperComponent } from './parents-wrapper/parents-wrapper.component';
import { AllParentsComponent } from './all-parents/all-parents.component';
import { NewParentComponent } from './new-parent/new-parent.component';
import { ViewParentComponent } from './view-parent/view-parent.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: ParentsWrapperComponent,
    children: [
      { path: "", component: AllParentsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-parents", component: AllParentsComponent },
      { path: "new-parent", component: NewParentComponent },
      { path: "view-parent", component: ViewParentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentsRoutingModule { }
