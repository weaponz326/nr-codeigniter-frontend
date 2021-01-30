import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';

@Component({
  selector: 'app-term-form',
  templateUrl: './term-form.component.html',
  styleUrls: ['./term-form.component.css']
})
export class TermFormComponent implements OnInit {

  constructor() { }

  @ViewChild('termNameReference') termName: jqxInputComponent;
  @ViewChild('termBeginReference') termBegin: jqxDateTimeInputComponent;
  @ViewChild('termEndReference') termEnd: jqxDateTimeInputComponent;
  @ViewChild('academicYearReference') academicYear: jqxComboBoxComponent;

  ngOnInit(): void {
  }

}
