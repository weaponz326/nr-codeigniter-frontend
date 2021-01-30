import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';

@Component({
  selector: 'app-ward-form',
  templateUrl: './ward-form.component.html',
  styleUrls: ['./ward-form.component.css']
})
export class WardFormComponent implements OnInit {

  constructor() { }

  @ViewChild('wardNumberReference') wardNumber: jqxInputComponent;
  @ViewChild('wardNameReference') wardName: jqxInputComponent;
  @ViewChild('locationReference') location: jqxTextAreaComponent;
  @ViewChild('capacityReference') capacity: jqxNumberInputComponent;
  @ViewChild('wardTypeReference') wardType: jqxComboBoxComponent;

  ngOnInit(): void {
  }

}
