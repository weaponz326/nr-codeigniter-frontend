import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';

import { MeetingsRoutingModule } from './meetings-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { MeetingsWrapperComponent } from './meetings-wrapper/meetings-wrapper.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllMeetingsComponent } from './all-meetings/all-meetings.component';
import { AddMeetingComponent } from './add-meeting/add-meeting.component';
import { ViewMeetingComponent } from './view-meeting/view-meeting.component';
import { MeetingFormComponent } from './meeting-form/meeting-form.component';


@NgModule({
  declarations: [
    MeetingsWrapperComponent,
    DashboardComponent,
    SettingsComponent,
    AllMeetingsComponent,
    AddMeetingComponent,
    ViewMeetingComponent,
    MeetingFormComponent,
  ],
  imports: [
    CommonModule,
    MeetingsRoutingModule,
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
export class MeetingsModule { }
