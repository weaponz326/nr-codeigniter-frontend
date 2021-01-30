import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
  selector: 'app-edit-received',
  templateUrl: './edit-received.component.html',
  styleUrls: ['./edit-received.component.css']
})
export class EditReceivedComponent implements OnInit {

  constructor() { }

  @ViewChild('editReceivedReference') editReceived: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  ngOnInit(): void {
  }

  openWindow(){
    this.editReceived.open();
  }

}
