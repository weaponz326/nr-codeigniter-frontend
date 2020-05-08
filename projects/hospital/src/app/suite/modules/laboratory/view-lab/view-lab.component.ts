import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist'
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
  selector: 'app-view-lab',
  templateUrl: './view-lab.component.html',
  styleUrls: ['./view-lab.component.css']
})
export class ViewLabComponent implements OnInit {

  constructor() { }

  @ViewChild('labCodeReference') labCode: jqxInputComponent;
  @ViewChild('labDateReference') labDate: jqxDateTimeInputComponent;
  @ViewChild('patientNameReference') patientName: jqxDropDownListComponent;
  @ViewChild('patientCodeReference') patientCode: jqxDropDownListComponent;
  @ViewChild('referedByReference') referedBy: jqxDropDownListComponent;
  @ViewChild('labTypeReference') labType: jqxInputComponent;
  @ViewChild('saveBillReference') saveButton: jqxButtonComponent;

  ngOnInit(): void {
  }

}
