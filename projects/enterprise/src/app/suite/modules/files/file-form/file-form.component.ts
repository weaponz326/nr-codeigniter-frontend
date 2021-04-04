import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxFileUploadComponent } from 'jqwidgets-ng/jqxfileupload';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';


@Component({
  selector: 'app-file-form',
  templateUrl: './file-form.component.html',
  styleUrls: ['./file-form.component.css']
})
export class FileFormComponent implements OnInit {

  constructor() { }

  @ViewChild("fileNumberReference") fileNumber: jqxInputComponent;
  @ViewChild("fileNameReference") fileName: jqxInputComponent;
  @ViewChild("fileTypeReference") fileType: jqxDropDownListComponent;
  @ViewChild("attachmentsReference") attachments: jqxFileUploadComponent;

  ngOnInit(): void {
  }

}
