import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxListBoxComponent } from 'jqwidgets-ng/jqxlistbox';


@Component({
  selector: 'app-fees-form',
  templateUrl: './fees-form.component.html',
  styleUrls: ['./fees-form.component.css']
})
export class FeesFormComponent implements OnInit {

  constructor() { }

  @ViewChild("feesCodeReference") feesCode: jqxInputComponent;
  @ViewChild("feesDescriptionReference") feesDescription: jqxInputComponent;
  @ViewChild("feesDateReference") feesDate: jqxDateTimeInputComponent;
  @ViewChild("targetClassesReference") targetClasses: jqxListBoxComponent;
  @ViewChild("targetStudentsReference") targetStudents: jqxListBoxComponent;

  ngOnInit(): void {
  }

}
