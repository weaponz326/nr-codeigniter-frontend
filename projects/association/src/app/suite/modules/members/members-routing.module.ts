import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MembersWrapperComponent } from './members-wrapper/members-wrapper.component';
import { AllMembersComponent } from './all-members/all-members.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { ViewMemberComponent } from './view-member/view-member.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: MembersWrapperComponent,
    children: [
      { path: "", component: AllMembersComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-members", component: AllMembersComponent },
      { path: "new-member", component: NewMemberComponent },
      { path: "view-member", component: ViewMemberComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
