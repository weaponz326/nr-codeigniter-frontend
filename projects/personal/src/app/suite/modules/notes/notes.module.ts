import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxEditorModule } from 'jqwidgets-ng/jqxeditor';
import { jqxFileUploadModule } from 'jqwidgets-ng/jqxfileupload';
import { jqxPanelModule } from 'jqwidgets-ng/jqxpanel';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';

import { NotesRoutingModule } from './notes-routing.module';

import { NotesWrapperComponent } from './notes-wrapper/notes-wrapper.component';
import { ViewNoteComponent } from './view-note/view-note.component';
import { AllNotesComponent } from './all-notes/all-notes.component';


@NgModule({
  declarations: [
    NotesWrapperComponent,
    ViewNoteComponent,
    AllNotesComponent
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    jqxInputModule,
    jqxEditorModule,
    jqxFileUploadModule,
    jqxPanelModule,
    jqxButtonModule,
    jqxDateTimeInputModule,
    jqxGridModule
  ]
})
export class NotesModule { }
