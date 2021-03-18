import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

@Component({
  selector: 'app-term-form',
  templateUrl: './term-form.component.html',
  styleUrls: ['./term-form.component.css']
})
export class TermFormComponent implements OnInit {

  constructor() { }

  @ViewChild('termNameReference') termName: jqxInputComponent;
  @ViewChild('termBeginsReference') termBegins: jqxDateTimeInputComponent;
  @ViewChild('termEndsReference') termEnds: jqxDateTimeInputComponent;
  @ViewChild('termStatusReference') termStatus: jqxDropDownListComponent;
  @ViewChild('academicYearReference') academicYear: jqxComboBoxComponent;

  statusSource: any[] = ['Yet to Start', 'Active', 'Ended', 'Suspended'];

  ngOnInit(): void {
  }

}
