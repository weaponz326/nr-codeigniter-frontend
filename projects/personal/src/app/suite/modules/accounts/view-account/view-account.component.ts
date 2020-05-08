import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';


@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})
export class ViewAccountComponent implements OnInit {

  constructor() { }

  @ViewChild("accountNameReference") accountNameInput: jqxInputComponent;
  @ViewChild("accountNumberReference") accountNumberInput: jqxInputComponent;
  @ViewChild("bankNameReference") bankNameInput: jqxInputComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;

  ngOnInit(): void {
  }

}
