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

  @ViewChild("addAccountReference") addAccount: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("accountNameReference") accountName: jqxInputComponent;
  @ViewChild("accountNumberReference") accountNumber: jqxInputComponent;
  @ViewChild("bankNameReference") bankName: jqxInputComponent;

  // open add account popup dialog window
  openWindow(){
    this.addAccount.open();
  }

  ngOnInit(): void {
  }

}
