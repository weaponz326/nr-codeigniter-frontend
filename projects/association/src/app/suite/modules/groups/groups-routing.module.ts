import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GroupsWrapperComponent } from './groups-wrapper/groups-wrapper.component';
import { AllGroupsComponent } from './all-groups/all-groups.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { ViewGroupComponent } from './view-group/view-group.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: GroupsWrapperComponent,
    children: [
      { path: "", component: AllGroupsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-groups", component: AllGroupsComponent },
      { path: "add-group", component: AddGroupComponent },
      { path: "view-group", component: ViewGroupComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
