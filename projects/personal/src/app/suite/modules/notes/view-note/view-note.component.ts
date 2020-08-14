import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxEditorComponent } from 'jqwidgets-ng/jqxeditor';
import { jqxFileUploadComponent } from 'jqwidgets-ng/jqxfileupload';
import { jqxPanelComponent } from 'jqwidgets-ng/jqxPanel';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { NotesApiService } from '../notes-api.service';
import { SuiteRoutesService } from '../../../suite-routes.service';

@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.component.html',
  styleUrls: ['./view-note.component.css']
})
export class ViewNoteComponent implements OnInit, AfterViewInit {

  constructor(private notesApi: NotesApiService, public suiteRoutes: SuiteRoutesService) { }

  @ViewChild("inputReference") input: jqxInputComponent;
  @ViewChild("editorReference") editor: jqxEditorComponent;
  @ViewChild("fileUploadReference") fileUpload: jqxFileUploadComponent;
  @ViewChild("panelReference") panel: jqxPanelComponent;
  @ViewChild("buttonReference") button: jqxButtonComponent;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
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
    // else create new note
    else{
      let subjectData = {
        user: localStorage.getItem('personal_id'),
        subject: event.args.value
      }

      this.notesApi.postSubject(subjectData)
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
    // else create new note
    else{
      let bodyData = {
        user: localStorage.getItem('personal_id'),
        body: this.editor.val()
      }

      this.notesApi.postBody(bodyData)
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

}
