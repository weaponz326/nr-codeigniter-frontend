import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxFileUploadComponent } from 'jqwidgets-ng/jqxfileupload';

@Component({
  selector: 'app-sent-form',
  templateUrl: './sent-form.component.html',
  styleUrls: ['./sent-form.component.css']
})
export class SentFormComponent implements OnInit {

  @ViewChild("dateSentReference") dateSent: jqxDateTimeInputComponent;
  @ViewChild("recepientReference") recepient: jqxInputComponent;
  @ViewChild("subjectReference") subject: jqxInputComponent;
  @ViewChild("referenceNumberReference") referenceNumber: jqxInputComponent;
  @ViewChild("letterDateReference") letterDate: jqxDateTimeInputComponent;
  @ViewChild("attachmentReference") attachment: jqxFileUploadComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
