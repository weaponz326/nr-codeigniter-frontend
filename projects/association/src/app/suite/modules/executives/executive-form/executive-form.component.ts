import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';


@Component({
  selector: 'app-executive-form',
  templateUrl: './executive-form.component.html',
  styleUrls: ['./executive-form.component.css']
})
export class ExecutiveFormComponent implements OnInit {

  constructor() { }

  @ViewChild('executiveNameReference') executiveName: jqxInputComponent;
  @ViewChild('positionReference') position: jqxInputComponent;
  @ViewChild('dateInductedReference') dateInducted: jqxDateTimeInputComponent;

  ngOnInit(): void {
  }

}
