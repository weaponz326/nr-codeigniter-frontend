import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';

@Component({
  selector: 'app-new-purchasing',
  templateUrl: './new-purchasing.component.html',
  styleUrls: ['./new-purchasing.component.css']
})
export class NewPurchasingComponent implements OnInit {

  @ViewChild("newPurchasingReference") newPurchasing: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("purchasingCodeReference") purchasingCode: jqxInputComponent;
  @ViewChild("purchasingDateReference") purchasingDate: jqxDateTimeInputComponent;
  @ViewChild("supplierNameReference") supplierName: jqxComboBoxComponent;
  @ViewChild("supplierContactReference") supplierContact: jqxInputComponent;
  @ViewChild("supplierInvoiceReference") supplierInvoice: jqxInputComponent;

  constructor() { }

  ngOnInit(): void {
  }

  openWindow(){
    this.newPurchasing.open();
  }

}
