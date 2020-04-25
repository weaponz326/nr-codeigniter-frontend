import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput'
import { jqxEditorModule } from 'jqwidgets-ng/jqxeditor'
import { jqxFileUploadModule } from 'jqwidgets-ng/jqxfileupload'
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons'
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput'
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid'

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
    jqxButtonModule,
    jqxDateTimeInputModule,
    jqxGridModule
  ]
})
export class NotesModule { }
