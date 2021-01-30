import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.css']
})
export class DetailFormComponent implements OnInit {

  constructor() { }

  @ViewChild("drugReference") drugInput: jqxInputComponent;
  @ViewChild("ndcNumberReference") ndcNumberInput: jqxInputComponent;
  @ViewChild("remarksReference") remarksTextArea: jqxTextAreaComponent;

  ngOnInit(): void {
  }

}
