import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';


@Component({
  selector: 'app-year-form',
  templateUrl: './year-form.component.html',
  styleUrls: ['./year-form.component.css']
})
export class YearFormComponent implements OnInit {

  constructor() { }

  @ViewChild('yearReference') year: jqxInputComponent;
  @ViewChild('yearBeginsReference') yearBegins: jqxDateTimeInputComponent;
  @ViewChild('yearEndsReference') yearEnds: jqxDateTimeInputComponent;
  @ViewChild('yearStatusReference') yearStatus: jqxDropDownListComponent;

  statusSource: any[] = ['Yet to Start', 'Active', 'Ended', 'Suspended', 'On Break'];

  ngOnInit(): void {
  }

}
