import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput'
import { jqxEditorComponent } from 'jqwidgets-ng/jqxeditor'
import { jqxFileUploadComponent } from 'jqwidgets-ng/jqxfileupload'
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons'

@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.component.html',
  styleUrls: ['./view-note.component.css']
})
export class ViewNoteComponent implements OnInit {

  constructor() { }

  @ViewChild("inputReference") input: jqxInputComponent;
  @ViewChild("editorReference") editor: jqxEditorComponent;
  @ViewChild("fileUploadReference") fileUpload: jqxFileUploadComponent;
  @ViewChild("buttonReference") button: jqxButtonComponent;

  ngOnInit(): void {
  }

}
