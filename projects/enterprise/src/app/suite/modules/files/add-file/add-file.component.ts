import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.component.html',
  styleUrls: ['./add-file.component.css']
})

export class AddFileComponent implements OnInit {

  constructor() { }

  @ViewChild("addFileReference") addFile: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("fileNumberReference") fileNumber: jqxInputComponent;
  @ViewChild("fileNameReference") fileName: jqxInputComponent;

  ngOnInit(): void {
  }

  openWindow(){
    this.addFile.open();
  }

}
