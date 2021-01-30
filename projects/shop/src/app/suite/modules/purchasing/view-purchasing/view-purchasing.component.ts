import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';

@Component({
  selector: 'app-view-purchasing',
  templateUrl: './view-purchasing.component.html',
  styleUrls: ['./view-purchasing.component.css']
})
export class ViewPurchasingComponent implements OnInit {

  constructor() { }

  @ViewChild("purchasingCodeReference") purchasingCode: jqxInputComponent;
  @ViewChild("purchasingDateReference") purchasingDate: jqxDateTimeInputComponent;
  @ViewChild("supplierNameReference") supplierName: jqxComboBoxComponent;
  @ViewChild("supplierContactReference") supplierContact: jqxInputComponent;
  @ViewChild("supplierInvoiceReference") supplierInvoice: jqxInputComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;

  ngOnInit(): void {
  }

}
