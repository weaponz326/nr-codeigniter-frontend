import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';


@Component({
  selector: 'app-new-bill',
  templateUrl: './new-bill.component.html',
  styleUrls: ['./new-bill.component.css']
})
export class NewBillComponent implements OnInit {

  constructor() { }

  @ViewChild("addBillReference") addBill: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild('billCodeReference') billCode: jqxInputComponent;
  @ViewChild('billDateReference') billDate: jqxDateTimeInputComponent;
  @ViewChild('billTypeReference') billType: jqxDateTimeInputComponent;
  @ViewChild('billSourceReference') billSource: jqxDropDownListComponent;
  @ViewChild('customerNameReference') customerName: jqxComboBoxComponent;

  billTypeSource: any[] = ["Order", "Sitting", "Delivery"];

  ngOnInit(): void {
  }

  openWindow(){
    this.addBill.open();
  }

  saveBill(){

  }

}
