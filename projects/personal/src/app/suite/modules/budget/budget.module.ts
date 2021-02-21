import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';

import { BudgetRoutingModule } from './budget-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { BudgetWrapperComponent } from './budget-wrapper/budget-wrapper.component';
import { AllBudgetComponent } from './all-budget/all-budget.component';
import { ViewBudgetComponent } from './view-budget/view-budget.component';
import { BudgetTablesComponent } from './budget-tables/budget-tables.component';
import { NewBudgetComponent } from './new-budget/new-budget.component';
import { AddIncomeComponent } from './add-income/add-income.component';
import { EditIncomeComponent } from './edit-income/edit-income.component';
import { AddExpenditureComponent } from './add-expenditure/add-expenditure.component';
import { EditExpenditureComponent } from './edit-expenditure/edit-expenditure.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    BudgetWrapperComponent,
    AllBudgetComponent,
    ViewBudgetComponent,
    BudgetTablesComponent,
    NewBudgetComponent,
    AddIncomeComponent,
    EditIncomeComponent,
    AddExpenditureComponent,
    EditExpenditureComponent,
    DashboardComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    BudgetRoutingModule,
    UtilitiesModule,
    DashboardModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDropDownListModule,
    jqxDateTimeInputModule,
    jqxWindowModule,
    jqxNumberInputModule
  ]
})
export class BudgetModule { }
