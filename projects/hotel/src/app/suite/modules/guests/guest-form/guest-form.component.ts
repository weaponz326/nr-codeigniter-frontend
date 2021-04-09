import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist'

@Component({
  selector: 'app-guest-form',
  templateUrl: './guest-form.component.html',
  styleUrls: ['./guest-form.component.css']
})
export class GuestFormComponent implements OnInit {

  constructor() { }

  @ViewChild('guestCodeReference') guestCode: jqxInputComponent;
  @ViewChild('firstNameReference') firstName: jqxInputComponent;
  @ViewChild('lastNameReference') lastName: jqxInputComponent;
  @ViewChild('sexReference') sex: jqxDropDownListComponent;
  @ViewChild('phoneReference') phone: jqxInputComponent;
  @ViewChild('emailReference') email: jqxInputComponent;
  @ViewChild('addressReference') address: jqxTextAreaComponent;

  sexSource: any[] = ["Male", "Female"];

  ngOnInit(): void {
  }

}
