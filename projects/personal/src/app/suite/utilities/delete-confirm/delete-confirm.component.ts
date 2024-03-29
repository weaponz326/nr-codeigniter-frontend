import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';


@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit {

  constructor() { }

  @Output() confirmEvent = new EventEmitter<string>();

  @ViewChild('confirmWindowReference') confirmWindow: jqxWindowComponent;
  @ViewChild("yesButtonReference") yesButton: jqxButtonComponent;
  @ViewChild("noButtonReference") noButton: jqxButtonComponent;

  ngOnInit(): void {
  }

  selectConfirmation(value: string) {
    this.confirmEvent.emit(value);
    console.log("u have selected " + value);
    this.closeWindow();
  }

  // ------------------------------------------------------------------------------------------------

  // open delete confirmation window
  openWindow(){
    this.confirmWindow.open();
  }

  closeWindow(){
    this.confirmWindow.close();
  }

}
