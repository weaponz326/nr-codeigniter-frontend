import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommitteesWrapperComponent } from './committees-wrapper/committees-wrapper.component';
import { AllCommitteesComponent } from './all-committees/all-committees.component';
import { NewCommitteeComponent } from './new-committee/new-committee.component';
import { ViewCommitteeComponent } from './view-committee/view-committee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: CommitteesWrapperComponent,
    children: [
      { path: "", component: AllCommitteesComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-committees", component: AllCommitteesComponent },
      { path: "new-committee", component: NewCommitteeComponent },
      { path: "view-committee", component: ViewCommitteeComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommitteesRoutingModule { }
