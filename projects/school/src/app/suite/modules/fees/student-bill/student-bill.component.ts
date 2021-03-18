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

  constructor() { }

  @ViewChild('billCodeReference') billCode: jqxInputComponent;
  @ViewChild('billNameReference') Name: jqxInputComponent;
  @ViewChild('billDateReference') billDate: jqxDateTimeInputComponent;
  @ViewChild('studentNameReference') studentName: jqxInputComponent;
  @ViewChild('studentCodeReference') studentCode: jqxInputComponent;

  navHeading: any[] = [
    { text: "All Bills", url: "/suite/fees/all-bills" },
    { text: "Student Bill", url: "/suite/fees/student-bill" },
  ];

  ngOnInit(): void {
  }

}
