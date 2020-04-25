import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';

import { BudgetWrapperComponent } from './budget-wrapper/budget-wrapper.component';
import { AllBudgetComponent } from './all-budget/all-budget.component';
import { ViewBudgetComponent } from './view-budget/view-budget.component';
import { BudgetTablesComponent } from './budget-tables/budget-tables.component';


@NgModule({
  declarations: [
    BudgetWrapperComponent, 
    AllBudgetComponent, 
    ViewBudgetComponent, BudgetTablesComponent,
  ],
  imports: [
    CommonModule,
    BudgetRoutingModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDropDownListModule,
    jqxDateTimeInputModule 
  ]
})
export class BudgetModule { }
