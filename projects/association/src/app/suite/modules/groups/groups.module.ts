import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';

import { GroupsRoutingModule } from './groups-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { GroupsWrapperComponent } from './groups-wrapper/groups-wrapper.component';
import { AllGroupsComponent } from './all-groups/all-groups.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { ViewGroupComponent } from './view-group/view-group.component';
import { GroupFormComponent } from './group-form/group-form.component';
import { GroupMembersComponent } from './group-members/group-members.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    GroupsWrapperComponent,
    AllGroupsComponent,
    AddGroupComponent,
    ViewGroupComponent,
    GroupFormComponent,
    GroupMembersComponent,
    DashboardComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    GroupsRoutingModule,
    UtilitiesModule,
    DashboardModule,
    ChartsModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxTextAreaModule,
  ]
})
export class GroupsModule { }
