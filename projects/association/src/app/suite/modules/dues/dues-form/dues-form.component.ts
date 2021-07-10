import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';


@Component({
  selector: 'app-dues-form',
  templateUrl: './dues-form.component.html',
  styleUrls: ['./dues-form.component.css']
})
export class DuesFormComponent implements OnInit {

  constructor() { }

  @ViewChild('duesCodeReference') duesCode: jqxInputComponent;
  @ViewChild('duesNameReference') duesName: jqxInputComponent;
  @ViewChild('duesDateReference') duesDate: jqxDateTimeInputComponent;
  @ViewChild('amountReference') amount: jqxNumberInputComponent;

  ngOnInit(): void {
  }

}
