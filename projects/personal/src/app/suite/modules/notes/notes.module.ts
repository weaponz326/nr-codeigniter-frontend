import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxEditorModule } from 'jqwidgets-ng/jqxeditor';
import { jqxFileUploadModule } from 'jqwidgets-ng/jqxfileupload';
import { jqxListBoxModule } from 'jqwidgets-ng/jqxlistbox';
import { jqxPanelModule } from 'jqwidgets-ng/jqxpanel';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';

import { NotesRoutingModule } from './notes-routing.module';
import { UtilitiesModule } from '../../utilities/utilities.module';
import { DashboardModule } from '../../dashboard/dashboard.module';

import { NotesWrapperComponent } from './notes-wrapper/notes-wrapper.component';
import { ViewNoteComponent } from './view-note/view-note.component';
import { AllNotesComponent } from './all-notes/all-notes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    NotesWrapperComponent,
    ViewNoteComponent,
    AllNotesComponent,
    DashboardComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    UtilitiesModule,
    DashboardModule,
    jqxInputModule,
    jqxEditorModule,
    jqxFileUploadModule,
    jqxListBoxModule,
    jqxPanelModule,
    jqxButtonModule,
    jqxDateTimeInputModule,
    jqxGridModule
  ]
})
export class NotesModule { }
