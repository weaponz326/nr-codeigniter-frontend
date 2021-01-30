import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
  selector: 'app-edit-sent',
  templateUrl: './edit-sent.component.html',
  styleUrls: ['./edit-sent.component.css']
})
export class EditSentComponent implements OnInit {

  constructor() { }

  @ViewChild('editSentReference') editSent: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  ngOnInit(): void {
  }

  openWindow(){
    this.editSent.open();
  }

}
