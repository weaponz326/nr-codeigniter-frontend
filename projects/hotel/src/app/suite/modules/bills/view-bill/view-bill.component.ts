import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

@Component({
  selector: 'app-view-bill',
  templateUrl: './view-bill.component.html',
  styleUrls: ['./view-bill.component.css']
})
export class ViewBillComponent implements OnInit {

  @ViewChild('billCodeReference') orderCode: jqxInputComponent;
  @ViewChild('billDateReference') orderDate: jqxDateTimeInputComponent;
  @ViewChild('guestNameReference') guestName: jqxDropDownListComponent;
  @ViewChild('guestCodeReference') guestCode: jqxDropDownListComponent;
  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
