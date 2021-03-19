import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { InvitationsComponent } from './invitations/invitations.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { ViewInvitationComponent } from './view-invitation/view-invitation.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'all-users', component: AllUsersComponent },
  { path: 'view-user', component: ViewUserComponent },
  { path: 'invitations', component: InvitationsComponent },
  {
    path: 'search',
    component: UserSearchComponent,
    children: [
      { path: 'search-results', component: SearchResultsComponent },
      { path: 'search-detail', component: SearchDetailComponent },
    ]
  },
  { path: 'view-invitation', component: ViewInvitationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
