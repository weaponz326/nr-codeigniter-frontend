import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
  selector: 'app-view-budget',
  templateUrl: './view-budget.component.html',
  styleUrls: ['./view-budget.component.css']
})
export class ViewBudgetComponent implements OnInit {

  constructor() { }

  @ViewChild('budgetNameReference') budgetNameInput: jqxInputComponent;
  @ViewChild('budgetTypeReference') budgetTypeDropDownList: jqxDropDownListComponent;
  @ViewChild('createdDateReference') createdDate: jqxDateTimeInputComponent;
  @ViewChild('updatedDateReference') updatedDate: jqxDateTimeInputComponent;
  @ViewChild('saveBudgetReference') saveButton: jqxButtonComponent;

  ngOnInit(): void {
  }

  // budget type settings
  budgetTypeSource: ["Weekly", "Monthly", "Quarterly", "Yearly"];

}
