import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';


@Component({
  selector: 'app-committee-form',
  templateUrl: './committee-form.component.html',
  styleUrls: ['./committee-form.component.css']
})
export class CommitteeFormComponent implements OnInit {

  constructor() { }

  @ViewChild('committeeNameReference') committeeName: jqxInputComponent;
  @ViewChild('dateFormedReference') dateFormed: jqxDateTimeInputComponent;
  @ViewChild('descriptionReference') description: jqxTextAreaComponent;
  @ViewChild('committeeStatusReference') committeeStatus: jqxDropDownListComponent;
  @ViewChild('functionsReference') functions: jqxTextAreaComponent;

  statusSource: any[] = ["Active", "Disolved"];

  ngOnInit(): void {
  }

}
