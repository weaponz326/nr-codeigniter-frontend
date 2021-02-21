import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxPanelModule } from 'jqwidgets-ng/jqxpanel';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';

import { PortalRoutingModule } from './portal-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { PortalWrapperComponent } from './portal-wrapper/portal-wrapper.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NewRinkComponent } from './new-rink/new-rink.component';
import { ViewRinkComponent } from './view-rink/view-rink.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { RecentContactsComponent } from './recent-contacts/recent-contacts.component';
import { RinkDetailsComponent } from './rink-details/rink-details.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    PortalWrapperComponent,
    TimelineComponent,
    NewRinkComponent,
    ViewRinkComponent,
    SearchViewComponent,
    SearchResultsComponent,
    RecentContactsComponent,
    RinkDetailsComponent,
    SearchDetailComponent,
    DashboardComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    UtilitiesModule,
    DashboardModule,
    jqxInputModule,
    jqxButtonModule,
    jqxPanelModule,
    jqxDropDownListModule,
    jqxTextAreaModule
  ]
})
export class PortalModule { }
