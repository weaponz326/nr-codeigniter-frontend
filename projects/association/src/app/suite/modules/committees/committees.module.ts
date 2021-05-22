import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';

import { CommitteesRoutingModule } from './committees-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { CommitteesWrapperComponent } from './committees-wrapper/committees-wrapper.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllCommitteesComponent } from './all-committees/all-committees.component';
import { NewCommitteeComponent } from './new-committee/new-committee.component';
import { ViewCommitteeComponent } from './view-committee/view-committee.component';
import { CommitteeFormComponent } from './committee-form/committee-form.component';
import { CommitteeMembersComponent } from './committee-members/committee-members.component';


@NgModule({
  declarations: [
    CommitteesWrapperComponent,
    DashboardComponent,
    SettingsComponent,
    AllCommitteesComponent,
    NewCommitteeComponent,
    ViewCommitteeComponent,
    CommitteeFormComponent,
    CommitteeMembersComponent
  ],
  imports: [
    CommonModule,
    CommitteesRoutingModule,
    UtilitiesModule,
    DashboardModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDropDownListModule,
    jqxTextAreaModule,
    jqxDateTimeInputModule,
  ]
})
export class CommitteesModule { }
