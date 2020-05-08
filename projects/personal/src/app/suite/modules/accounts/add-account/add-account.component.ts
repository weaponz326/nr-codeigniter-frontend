import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  constructor() { }

  @ViewChild("addAccountReference") addAccountWindow: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("accountNameReference") accountNameInput: jqxInputComponent;
  @ViewChild("accountNumberReference") accountNumberInput: jqxInputComponent;
  @ViewChild("bankNameReference") bankNameInput: jqxInputComponent;

  // open add account popup dialog window
  openWindow(){
    this.addAccountWindow.open();
  }

  ngOnInit(): void {
  }

}
