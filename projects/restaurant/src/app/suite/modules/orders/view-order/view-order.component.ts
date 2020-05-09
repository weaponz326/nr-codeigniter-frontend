import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons/public_api';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

  constructor() { }

  @ViewChild('orderCodeReference') orderCode: jqxInputComponent;
  @ViewChild('orderDateReference') orderDate: jqxDateTimeInputComponent;
  @ViewChild('guestNameReference') guestName: jqxComboBoxComponent;
  @ViewChild('orderTypeReference') orderType: jqxDropDownListComponent;
  @ViewChild('orderStatusReference') orderStatus: jqxDropDownListComponent;
  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;

  ngOnInit(): void {
  }

}
