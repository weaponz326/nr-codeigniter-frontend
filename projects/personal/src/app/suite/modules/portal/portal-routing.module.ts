import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortalWrapperComponent } from './portal-wrapper/portal-wrapper.component';
import { ViewRinkComponent } from './view-rink/view-rink.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { NewRinkComponent } from './new-rink/new-rink.component';
import { TaskDetailComponent } from './rink-details/task-detail/task-detail.component';
import { AppointmentDetailComponent } from './rink-details/appointment-detail/appointment-detail.component';
import { NoteDetailComponent } from './rink-details/note-detail/note-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  {
    path: "",
    component: PortalWrapperComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "settings", component: SettingsComponent },
      { path: "timeline", component: TimelineComponent },
      { path: "new-rink", component: NewRinkComponent },
      {
        path: "search",
        component: SearchViewComponent,
        children: [
          { path: "", component: SearchResultsComponent },
          { path: "search-results", component: SearchResultsComponent },
          { path: "search-detail", component: SearchDetailComponent },
        ]
      },
      {
        path: "view-rink",
        component: ViewRinkComponent,
        children: [
          { path: "task", component: TaskDetailComponent },
          { path: "appointment", component: AppointmentDetailComponent },
          { path: "note", component: NoteDetailComponent },
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
