import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxFileUploadComponent } from 'jqwidgets-ng/jqxfileupload';

@Component({
  selector: 'app-received-form',
  templateUrl: './received-form.component.html',
  styleUrls: ['./received-form.component.css']
})
export class ReceivedFormComponent implements OnInit {

  @ViewChild("dateReceivedReference") dateReceived: jqxDateTimeInputComponent;
  @ViewChild("senderReference") sender: jqxInputComponent;
  @ViewChild("subjectReference") subject: jqxInputComponent;
  @ViewChild("referenceNumberReference") referenceNumber: jqxInputComponent;
  @ViewChild("letterDateReference") letterDate: jqxDateTimeInputComponent;
  @ViewChild("attachmentReference") attachment: jqxFileUploadComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
