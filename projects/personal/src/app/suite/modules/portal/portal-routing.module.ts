import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortalWrapperComponent } from './portal-wrapper/portal-wrapper.component';
import { ViewRinkComponent } from './view-rink/view-rink.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { RecentContactsComponent } from './recent-contacts/recent-contacts.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { NewRinkComponent } from './new-rink/new-rink.component';
import { TaskDetailComponent } from './rink-details/task-detail/task-detail.component';
import { AppointmentDetailComponent } from './rink-details/appointment-detail/appointment-detail.component';
import { NoteDetailComponent } from './rink-details/note-detail/note-detail.component';


const routes: Routes = [
  {
    path: "",
    component: PortalWrapperComponent,
    children: [
      { path: "", component: TimelineComponent },
      { path: "timeline", component: TimelineComponent },
      {
        path: "search",
        component: SearchViewComponent,
        children: [
          { path: "", component: RecentContactsComponent },
          { path: "recent-contacts", component: RecentContactsComponent },
          { path: "search-results", component: SearchResultsComponent },
          { path: "search-detail", component: SearchDetailComponent },
        ]
      },
      { path: "new-rink", component: NewRinkComponent },
      {
        path: "view-rink",
        component: ViewRinkComponent,
        children: [
          { path: "task", component: TaskDetailComponent },
          { path: "appoitment", component: AppointmentDetailComponent },
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
