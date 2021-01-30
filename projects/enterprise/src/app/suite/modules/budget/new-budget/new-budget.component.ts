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

  @ViewChild('newBudgetReference') BudgetWindow: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild('budgetNameReference') budgetName: jqxInputComponent;
  @ViewChild('budgetTypeReference') budgetType: jqxDropDownListComponent;

  ngOnInit(): void {
  }

  // open new budget popup window
  openWindow(){
    this.BudgetWindow.open();
  }

  // widgets
  // -----------------------------------------------------------------------------------------

  // budget type settings
  budgetTypeSource: ["Weekly", "Monthly", "Quarterly", "Yearly"];

}
