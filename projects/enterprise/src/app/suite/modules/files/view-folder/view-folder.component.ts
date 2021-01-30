import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';

@Component({
  selector: 'app-view-folder',
  templateUrl: './view-folder.component.html',
  styleUrls: ['./view-folder.component.css']
})
export class ViewFolderComponent implements OnInit {

  constructor() { }

  @ViewChild("folderNameReference") folderName: jqxInputComponent;
  @ViewChild("folderNumberReference") folderNumber: jqxInputComponent;
  @ViewChild("dateCreatedReference") dateCreated: jqxDateTimeInputComponent;
  @ViewChild("lastUpdatedReference") lastUpdated: jqxDateTimeInputComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;

  ngOnInit(): void {
  }

}
