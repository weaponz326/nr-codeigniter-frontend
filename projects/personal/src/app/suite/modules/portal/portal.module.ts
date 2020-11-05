import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxPanelModule } from 'jqwidgets-ng/jqxpanel';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';

import { PortalRoutingModule } from './portal-routing.module';
import { UtilitiesModule } from '../../utilities/utilities.module';

import { PortalWrapperComponent } from './portal-wrapper/portal-wrapper.component';
import { RecentContactsComponent } from './recent-contacts/recent-contacts.component';
import { ViewRinkComponent } from './view-rink/view-rink.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NewRinkComponent } from './new-rink/new-rink.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { TaskComponent } from './rink-types/task/task.component';
import { NoteComponent } from './rink-types/note/note.component';
import { AppointmentComponent } from './rink-types/appointment/appointment.component';
import { TaskDetailComponent } from './rink-details/task-detail/task-detail.component';
import { AppointmentDetailComponent } from './rink-details/appointment-detail/appointment-detail.component';
import { NoteDetailComponent } from './rink-details/note-detail/note-detail.component';


@NgModule({
  declarations: [
    PortalWrapperComponent,
    RecentContactsComponent,
    ViewRinkComponent,
    TimelineComponent,
    NewRinkComponent,
    SearchResultsComponent,
    SearchViewComponent,
    SearchDetailComponent,
    TaskComponent,
    NoteComponent,
    AppointmentComponent,
    TaskDetailComponent,
    AppointmentDetailComponent,
    NoteDetailComponent,
  ],
  imports: [
    CommonModule,
    ScrollingModule,
    PortalRoutingModule,
    UtilitiesModule,
    jqxInputModule,
    jqxButtonModule,
    jqxPanelModule,
    jqxDropDownListModule,
    jqxTextAreaModule,
    jqxComboBoxModule,
    jqxWindowModule,
    jqxGridModule,
  ]
})
export class PortalModule { }
