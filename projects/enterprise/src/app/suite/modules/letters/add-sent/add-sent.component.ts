import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
  selector: 'app-add-sent',
  templateUrl: './add-sent.component.html',
  styleUrls: ['./add-sent.component.css']
})
export class AddSentComponent implements OnInit {

  constructor() { }

  @ViewChild('addSentReference') addSent: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  ngOnInit(): void {
  }

  openWindow(){
    this.addSent.open();
  }

}
