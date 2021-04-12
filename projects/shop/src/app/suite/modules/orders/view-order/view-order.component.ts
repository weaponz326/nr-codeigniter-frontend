import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

  constructor() { }

  @ViewChild('orderCodeReference') orderCode: jqxInputComponent;
  @ViewChild('orderDateReference') orderDate: jqxDateTimeInputComponent;
  @ViewChild('customerNameReference') customerName: jqxComboBoxComponent;
  @ViewChild('orderTypeReference') orderType: jqxDropDownListComponent;
  @ViewChild('orderStatusReference') orderStatus: jqxDropDownListComponent;

  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteButtonReference') deleteButton: jqxButtonComponent;
  @ViewChild('cancelButtonReference') cancelButton: jqxButtonComponent;

  navHeading: any[] = [
    { text: "All Orders", url: "/suite/orders/all-orders" },
    { text: "View Order", url: "/suite/orders/view-order" },
  ];

  ngOnInit(): void {
  }

}
