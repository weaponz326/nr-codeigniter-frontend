import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesWrapperComponent } from './notes-wrapper/notes-wrapper.component';
import { ViewNoteComponent } from './view-note/view-note.component';
import { AllNotesComponent } from './all-notes/all-notes.component';


const routes: Routes = [
  {
    path: "",
    component: NotesWrapperComponent,
    children: [
      { path: "view_note", component: ViewNoteComponent },
      { path: "all_notes", component: AllNotesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }