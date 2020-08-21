import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

@Component({
  selector: 'app-student-bill',
  templateUrl: './student-bill.component.html',
  styleUrls: ['./student-bill.component.css']
})
export class StudentBillComponent implements OnInit {

  @ViewChild('billCodeReference') billCode: jqxInputComponent;
  @ViewChild('billNameReference') Name: jqxInputComponent;
  @ViewChild('billDateReference') billDate: jqxDateTimeInputComponent;
  @ViewChild('studentNameReference') studentName: jqxDropDownListComponent;
  @ViewChild('studentCodeReference') studentCode: jqxDropDownListComponent;
  @ViewChild('billTypeReference') billType: jqxComboBoxComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
