import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';

@Component({
  selector: 'app-ward-form',
  templateUrl: './ward-form.component.html',
  styleUrls: ['./ward-form.component.css']
})
export class WardFormComponent implements OnInit {

  @ViewChild('wardNumberReference') wardNumber: jqxInputComponent;
  @ViewChild('wardNameReference') wardName: jqxInputComponent;
  @ViewChild('locationReference') location: jqxInputComponent;
  @ViewChild('capacityReference') capacity: jqxInputComponent;
  @ViewChild('wardTypeReference') wardType: jqxComboBoxComponent;
  @ViewChild('wardStatusReference') wardStatus: jqxDropDownListComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
