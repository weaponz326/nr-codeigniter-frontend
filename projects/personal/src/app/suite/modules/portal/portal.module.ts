import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxPanelModule } from 'jqwidgets-ng/jqxpanel';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';

import { PortalRoutingModule } from './portal-routing.module';

import { PortalWrapperComponent } from './portal-wrapper/portal-wrapper.component';
import { RecentContactsComponent } from './recent-contacts/recent-contacts.component';
import { ViewRinkComponent } from './view-rink/view-rink.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NewRinkComponent } from './new-rink/new-rink.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { RinkDetailsComponent } from './rink-details/rink-details.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';


@NgModule({
  declarations: [
    PortalWrapperComponent,
    RecentContactsComponent,
    ViewRinkComponent,
    TimelineComponent,
    NewRinkComponent,
    SearchResultsComponent,
    SearchViewComponent,
    RinkDetailsComponent,
    SearchDetailComponent,
  ],
  imports: [
    CommonModule,
    ScrollingModule,
    PortalRoutingModule,
    jqxInputModule,
    jqxButtonModule,
    jqxPanelModule,
    jqxDropDownListModule,
    jqxTextAreaModule
  ]
})
export class PortalModule { }
