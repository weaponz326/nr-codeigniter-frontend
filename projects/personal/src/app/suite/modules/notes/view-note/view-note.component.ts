import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxEditorComponent } from 'jqwidgets-ng/jqxeditor';
import { jqxFileUploadComponent } from 'jqwidgets-ng/jqxfileupload';
import { jqxListBoxComponent } from 'jqwidgets-ng/jqxlistbox';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { LoadingSpinnerComponent } from '../../../utilities/loading-spinner/loading-spinner.component';
import { ConnectionNotificationComponent } from '../../../utilities/connection-notification/connection-notification.component';
import { DeleteConfirmComponent } from '../../../utilities/delete-confirm/delete-confirm.component';
import { NotesApiService } from '../notes-api.service';


@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.component.html',
  styleUrls: ['./view-note.component.css']
})
export class ViewNoteComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    private router: Router,
    private location: Location,
    private notesApi: NotesApiService,
  ) { }

  @ViewChild("inputReference") input: jqxInputComponent;
  @ViewChild("editorReference") editor: jqxEditorComponent;
  @ViewChild("fileUploadReference") fileUpload: jqxFileUploadComponent;
  @ViewChild("fileListBoxReference") fileListBox: jqxListBoxComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;
  @ViewChild("allNotesButtonReference") allNotesButton: jqxButtonComponent;
  @ViewChild("newNoteButtonReference") newNoteButton: jqxButtonComponent;

  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;
  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;

  navHeading: any[] = [
    { text: "View Note", url: "/suite/notes/view-note" },
  ];

  fileNames = [];
  filesToUpload: File[] = [];

  ngOnInit(): void {
  }

  onFileSelected(e: any){
    this.filesToUpload = [];
    this.filesToUpload = e.target.files;

    for(var i = 0; i < this.filesToUpload.length; i++){
      this.sendFile(this.filesToUpload[i]);
    }

    console.log(this.filesToUpload);
  }

  ngAfterViewInit(): void {
    if(sessionStorage.getItem('note_id') !== null) {
      this.notesApi.getNote()
        .subscribe(
          res => {
            console.log(res);
            this.input.val(res.subject);
            this.editor.val(res.body);
          },
          err => {
            console.log(err);
            this.connectionNotification.errorNotification.open();
          }
        )

      this.notesApi.getFiles()
        .subscribe(
          res => {
            console.log(res);
            this.fileNames = res;
          },
          err => {
            console.log(err);
            this.connectionNotification.errorNotification.open();
          }
        )
    }
  }

  ngOnDestroy(): void {
    // blank note will be displayed on init
    sessionStorage.removeItem('note_id');
  }

  saveNote(){
    let noteData = {
      user: localStorage.getItem('personal_id'),
      subject: this.input.val(),
      body: this.editor.val()
    }

    // update note if note id is not set in session
    if(sessionStorage.getItem('note_id') !== null) {
      this.loadingSpinner.httpLoader.open();
      this.notesApi.putNote(noteData)
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();
          },
          err => {
            console.log(err);
            this.loadingSpinner.httpLoader.close();
            this.connectionNotification.errorNotification.open();
          }
        )
    }else{
      this.loadingSpinner.httpLoader.open();
      this.notesApi.postNote(noteData)
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();
            sessionStorage.setItem('note_id', res.id);
          },
          err => {
            console.log(err);
            this.loadingSpinner.httpLoader.close();
            this.connectionNotification.errorNotification.open();
          }
        )
    }
  }

  deleteNote(){
    if(sessionStorage.getItem('note_id')) {
      this.deleteConfirmComponent.openWindow();
    }
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      console.log("so u are really gonna delete the item...");

      this.loadingSpinner.httpLoader.open();

      this.notesApi.deleteNote()
        .subscribe(
          res => {
            console.log(res);
            this.connectionNotification.errorNotification.open();
            // TODO refresh page after delete
          },
          err => {
            console.log(err);
            this.loadingSpinner.httpLoader.close();
            this.connectionNotification.errorNotification.open();
          }
        )
    }
  }

  // --------------------------------------------------------------------------------

  sendSubject(event: any){
    console.log(event?.args.value)

    let subjectData = {
      user: localStorage.getItem('personal_id'),
      subject: event?.args.value
    }

    // update note if note id is not set in session
    if(sessionStorage.getItem('note_id') !== null) {
      this.loadingSpinner.httpLoader.open();
      this.notesApi.putNote(subjectData)
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();
          },
          err => {
            console.log(err);
            this.loadingSpinner.httpLoader.close();
            this.connectionNotification.errorNotification.open();
          }
        )
    }
    else {
      this.loadingSpinner.httpLoader.open();
      this.notesApi.postNote(subjectData)
        .subscribe(
          res => {
            console.log(res);
            sessionStorage.setItem('note_id', res.id)
            this.loadingSpinner.httpLoader.close();
          },
          err => {
            console.log(err);
            this.loadingSpinner.httpLoader.close();
            this.connectionNotification.errorNotification.open();
          }
        )
    }

  }

  sendBody(event: any){
    console.log(event.args);
    console.log(this.editor.val());

    let bodyData = {
      user: localStorage.getItem('personal_id'),
      body: this.editor.val()
    }

    // update note if note id is not set in session
    if(sessionStorage.getItem('note_id') !== null) {
      this.loadingSpinner.httpLoader.open();
      this.notesApi.putNote(bodyData)
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();
          },
          err => {
            console.log(err);
            this.loadingSpinner.httpLoader.close();
            this.connectionNotification.errorNotification.open();
          }
        )
    }
    else {
      this.loadingSpinner.httpLoader.open();
      this.notesApi.putNote(bodyData)
        .subscribe(
          res => {
            console.log(res);
            sessionStorage.setItem('note_id', res.id);
            this.loadingSpinner.httpLoader.close();
          },
          err => {
            console.log(err);
            this.loadingSpinner.httpLoader.close();
            this.connectionNotification.errorNotification.open();
          }
        )
    }
  }

  sendFile(file){
    let formData = new FormData();
    formData.append("note", sessionStorage.getItem('note_id'));
    formData.append("file", file);

    this.notesApi.postFile(formData)
      .subscribe(
        res => {
          console.log(res);
          // TODO: pushes null into array
          this.fileNames.push(res?.data?.file);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  deleteFile(fileId, index){
    this.notesApi.deleteFile(fileId)
      .subscribe(
        res => {
          console.log(res);
          this.fileNames.splice(index, 1);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  formatFileName(name){
    return name.replace('/notes/', '');
  }

}
