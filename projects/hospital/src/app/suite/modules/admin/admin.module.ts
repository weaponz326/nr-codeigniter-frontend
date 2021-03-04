import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxFormModule } from 'jqwidgets-ng/jqxform';
import { jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';
import { jqxPanelModule } from 'jqwidgets-ng/jqxpanel';
import { jqxListBoxModule } from 'jqwidgets-ng/jqxlistbox';

import { AdminRoutingModule } from './admin-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { AdminWrapperComponent } from './admin-wrapper/admin-wrapper.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { AccessFormComponent } from './access-form/access-form.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { InvitationsComponent } from './invitations/invitations.component';
import { ViewInvitationComponent } from './view-invitation/view-invitation.component';
import { SettingsComponent } from './settings/settings.component';
import { AllActivitiesComponent } from './all-activities/all-activities.component';
import { UserActivitiesComponent } from './user-activities/user-activities.component';
import { UserMiniActivitiesComponent } from './user-mini-activities/user-mini-activities.component';


@NgModule({
  declarations: [
    AdminWrapperComponent,
    DashboardComponent,
    AllUsersComponent,
    ViewUserComponent,
    AccessFormComponent,
    SearchResultsComponent,
    SearchDetailComponent,
    UserSearchComponent,
    InvitationsComponent,
    ViewInvitationComponent,
    SettingsComponent,
    AllActivitiesComponent,
    UserActivitiesComponent,
    UserMiniActivitiesComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    UtilitiesModule,
    DashboardModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDropDownListModule,
    jqxFormModule,
    jqxCheckBoxModule,
    jqxPanelModule,
    jqxListBoxModule,
  ]
})
export class AdminModule { }
