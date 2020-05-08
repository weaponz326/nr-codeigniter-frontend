import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist'
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
  selector: 'app-view-bill',
  templateUrl: './view-bill.component.html',
  styleUrls: ['./view-bill.component.css']
})
export class ViewBillComponent implements OnInit {

  constructor() { }

  @ViewChild('billCodeReference') billCode: jqxInputComponent;
  @ViewChild('billDateReference') billDate: jqxDateTimeInputComponent;
  @ViewChild('patientNameReference') patientName: jqxDropDownListComponent;
  @ViewChild('patientCodeReference') patientCode: jqxDropDownListComponent;
  @ViewChild('admissionCodeReference') admissionCode: jqxDropDownListComponent;
  @ViewChild('saveBillReference') saveButton: jqxButtonComponent;

  ngOnInit(): void {
  }

}
