import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MeetingsWrapperComponent } from './meetings-wrapper/meetings-wrapper.component';
import { AllMeetingsComponent } from './all-meetings/all-meetings.component';
import { AddMeetingComponent } from './add-meeting/add-meeting.component';
import { ViewMeetingComponent } from './view-meeting/view-meeting.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: MeetingsWrapperComponent,
    children: [
      { path: "", component: AllMeetingsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "all-meetings", component: AllMeetingsComponent },
      { path: "add-meeting", component: AddMeetingComponent },
      { path: "view-meeting", component: ViewMeetingComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingsRoutingModule { }
