import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';


@Component({
  selector: 'app-manufacturing-form',
  templateUrl: './manufacturing-form.component.html',
  styleUrls: ['./manufacturing-form.component.css']
})
export class ManufacturingFormComponent implements OnInit {

  constructor() { }

  @ViewChild('manufacturingCodeReference') manufacturingCode: jqxInputComponent;
  @ViewChild('descriptionReference') description: jqxTextAreaComponent;
  @ViewChild('startDateReference') startDate: jqxDateTimeInputComponent;
  @ViewChild('startDateReference') endDate: jqxDateTimeInputComponent;
  @ViewChild('productNameReference') productName: jqxInputComponent;
  @ViewChild('productCodeReference') productCode: jqxInputComponent;
  @ViewChild('quantityReference') quantity: jqxInputComponent;
  @ViewChild('manufacturingStatusReference') manufacturingStatus: jqxDropDownListComponent;
  @ViewChild('remarksReference') remarks: jqxTextAreaComponent;

  ngOnInit(): void {
  }

}
