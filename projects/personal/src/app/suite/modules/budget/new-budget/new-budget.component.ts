import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
  selector: 'app-new-budget',
  templateUrl: './new-budget.component.html',
  styleUrls: ['./new-budget.component.css']
})
export class NewBudgetComponent implements OnInit {

  constructor() { }

  @ViewChild('newBudgetReference') newBudgetWindow: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild('budgetNameReference') budgetNameInput: jqxInputComponent;
  @ViewChild('budgetTypeReference') budgetTypeDropDownList: jqxDropDownListComponent;

  // budget type settings
  budgetTypeSource: ["Weekly", "Monthly", "Quarterly", "Yearly"];

  // open new budget popup window
  openWindow(){
    this.newBudgetWindow.open();
  }

  ngOnInit(): void {
  }

}
