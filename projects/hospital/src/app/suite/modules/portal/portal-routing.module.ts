import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortalWrapperComponent } from './portal-wrapper/portal-wrapper.component';
import { ViewRinkComponent } from './view-rink/view-rink.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { NewRinkComponent } from './new-rink/new-rink.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { RecentContactsComponent } from './recent-contacts/recent-contacts.component';


const routes: Routes = [
  {
    path: "",
    component: PortalWrapperComponent,
    children: [
      { path: "", component: TimelineComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      { path: "timeline", component: TimelineComponent },
      { path: "new-rink", component: NewRinkComponent },
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
      { path: "view-rink", component: ViewRinkComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
