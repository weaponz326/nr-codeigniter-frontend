import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
  selector: 'app-add-received',
  templateUrl: './add-received.component.html',
  styleUrls: ['./add-received.component.css']
})
export class AddReceivedComponent implements OnInit {

  @ViewChild('addReceivedReference') addReceived: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  constructor() { }

  ngOnInit(): void {
  }

  openWindow(){
    this.addReceived.open();
  }

}
