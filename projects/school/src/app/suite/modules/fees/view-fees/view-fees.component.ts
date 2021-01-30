import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

@Component({
  selector: 'app-view-fees',
  templateUrl: './view-fees.component.html',
  styleUrls: ['./view-fees.component.css']
})
export class ViewFeesComponent implements OnInit {

  constructor() { }

  @ViewChild("feesCodeReference") feesCode: jqxInputComponent;
  @ViewChild("feesDescriptionReference") feesDescription: jqxInputComponent;
  @ViewChild("feesDateReference") feesDate: jqxDateTimeInputComponent;
  @ViewChild("targetClassReference") targetClass: jqxDropDownListComponent;
  @ViewChild("targetStudentReference") targetStudent: jqxDropDownListComponent;
  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;

  ngOnInit(): void {
  }

}
