import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxFileUploadComponent } from 'jqwidgets-ng/jqxfileupload';

@Component({
  selector: 'app-view-file',
  templateUrl: './view-file.component.html',
  styleUrls: ['./view-file.component.css']
})
export class ViewFileComponent implements OnInit {

    constructor() { }

  @ViewChild("folderNameReference") folderName: jqxInputComponent;
  @ViewChild("folderNumberReference") folderNumber: jqxInputComponent;
  @ViewChild("fileNameReference") fileName: jqxInputComponent;
  @ViewChild("fileNumberReference") fileNumber: jqxInputComponent;
  @ViewChild("dateAddedReference") dateAdded: jqxDateTimeInputComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("attachmentsReference") attachments: jqxFileUploadComponent;

  ngOnInit(): void {
  }

}
