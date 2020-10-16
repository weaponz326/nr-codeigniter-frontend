import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxEditorComponent } from 'jqwidgets-ng/jqxeditor';
import { jqxFileUploadComponent } from 'jqwidgets-ng/jqxfileupload';
import { jqxPanelComponent } from 'jqwidgets-ng/jqxpanel';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { DeleteConfirmComponent } from '../../../utilities/delete-confirm/delete-confirm.component';
import { NotesApiService } from '../notes-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';

@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.component.html',
  styleUrls: ['./view-note.component.css']
})
export class ViewNoteComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild("inputReference") input: jqxInputComponent;
  @ViewChild("editorReference") editor: jqxEditorComponent;
  @ViewChild("fileUploadReference") fileUpload: jqxFileUploadComponent;
  @ViewChild("panelReference") panel: jqxPanelComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;
  @ViewChild("allNotesButtonReference") allNotesButton: jqxButtonComponent;
  @ViewChild("newNoteButtonReference") newNoteButton: jqxButtonComponent;

  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  constructor(
    private router: Router,
    private location: Location,
    private notesApi: NotesApiService,
    public suiteRoutes: SuiteRoutesService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if(sessionStorage['note_id']) {
      // load note's subject
      this.notesApi.getSubject()
        .subscribe(
          res => {
            console.log(res);
            this.input.val(res.subject);
          },
          err => {
            console.log(err);
          }
        )

      // load note's body
      this.notesApi.getBody()
        .subscribe(
          res => {
            console.log(res);
            this.editor.val(res.body);
          },
          err => {
            console.log(err);
          }
        )
    }
  }

  ngOnDestroy(): void {
    // blank note will be displayed on init
    sessionStorage.removeItem('note_id');
  }

  newNote() {
    // destroy session and refresh page
    sessionStorage.removeItem('note_id');
    this.router.navigateByUrl('suite/notes/view-note', {skipLocationChange: true}).then(() => {
      // TODO - refresh not working
      this.router.navigate([decodeURI(this.location.path())]);
    });
  }

  saveNote(){
    // update note if note id is not set in session
    if(sessionStorage['note_id']) {
      let noteData = {
        note_id: sessionStorage.getItem('note_id'),
        user: localStorage.getItem('personal_id'),
        subject: this.input.val(),
        body: this.editor.val()
      }

      this.notesApi.putNote(noteData)
        .subscribe(
          res => {
            console.log(res);
          },
          err => {
            console.log(err);
          }
        )
    }else{
      let noteData = {
        user: localStorage.getItem('personal_id'),
        subject: this.input.val(),
        body: this.editor.val()
      }

      this.notesApi.postNote(noteData)
        .subscribe(
          res => {
            console.log(res);
            // set note id in session
            sessionStorage.setItem('note_id', res.note_id);
          },
          err => {
            console.log(err);
          }
        )
    }
  }

  deleteNote(){
    if(sessionStorage['note_id']) {
      this.deleteConfirmComponent.openWindow();
    }
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      console.log("so u are really gonna delete the item...");

      this.notesApi.deleteNote()
        .subscribe(
          res => {
            console.log(res);

            // TODO refresh page after delete
          },
          err => {
            console.log(err);
          }
        )
    }
  }

  // widgets
  // --------------------------------------------------------------------------------

  sendSubject(event: any){
    console.log(event.args.value)

    // update note if note id is not set in session
    if(sessionStorage['note_id']) {
      let subjectData = {
        note_id: sessionStorage.getItem('note_id'),
        subject: event.args.value
      }

      this.notesApi.putSubject(subjectData)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      )
    }
  }

  sendBody(event: any){
    console.log(event.args);
    console.log(this.editor.val());

    // update note if note id is not set in session
    if(sessionStorage['note_id']) {
      let bodyData = {
        note_id: sessionStorage.getItem('note_id'),
        body: this.editor.val()
      }

      this.notesApi.putBody(bodyData)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      )
    }
  }

}
