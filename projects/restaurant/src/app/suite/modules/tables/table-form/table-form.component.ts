import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.css']
})
export class TableFormComponent implements OnInit {

  constructor() { }

  @ViewChild('tableNumberReference') tableNumber: jqxInputComponent;
  @ViewChild('capacityReference') capacity: jqxNumberInputComponent;
  @ViewChild('statusReference') status: jqxDropDownListComponent;
  @ViewChild('locationReference') location: jqxInputComponent;

  ngOnInit(): void {
  }

}
