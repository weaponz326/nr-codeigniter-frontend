import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.css']
})
export class TableFormComponent implements OnInit {

  constructor() { }

  @ViewChild('tableNumberReference') tableNumber: jqxInputComponent;
  @ViewChild('tableTypeReference') tableType: jqxComboBoxComponent;
  @ViewChild('capacityReference') capacity: jqxNumberInputComponent;
  @ViewChild('tableStatusReference') tableStatus: jqxDropDownListComponent;
  @ViewChild('locationReference') location: jqxInputComponent;

  ngOnInit(): void {
  }

  statusSource: any[] = ["Occupied", "Vacant", "Need Cleaning"];

}
