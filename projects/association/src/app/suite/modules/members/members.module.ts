import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';
import { jqxPanelModule } from 'jqwidgets-ng/jqxpanel';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

import { MembersRoutingModule } from './members-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { AllMembersComponent } from './all-members/all-members.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { MembersWrapperComponent } from './members-wrapper/members-wrapper.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { ViewMemberComponent } from './view-member/view-member.component';
import { MemberFormComponent } from './member-form/member-form.component';


@NgModule({
  declarations: [
    AllMembersComponent,
    DashboardComponent,
    SettingsComponent,
    MembersWrapperComponent,
    NewMemberComponent,
    ViewMemberComponent,
    MemberFormComponent,
  ],
  imports: [
    CommonModule,
    MembersRoutingModule,
    UtilitiesModule,
    DashboardModule,
    ChartsModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDropDownListModule,
    jqxTextAreaModule,
    jqxPanelModule,
    jqxWindowModule,
    jqxDateTimeInputModule,
  ]
})
export class MembersModule { }
