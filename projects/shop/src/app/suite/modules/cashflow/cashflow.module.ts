import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

import { CashflowRoutingModule } from './cashflow-routing.module';

import { CashflowWrapperComponent } from './cashflow-wrapper/cashflow-wrapper.component';
import { AllCashflowComponent } from './all-cashflow/all-cashflow.component';
import { NewSheetComponent } from './new-sheet/new-sheet.component';
import { ViewSheetComponent } from './view-sheet/view-sheet.component';
import { WeeklyComponent } from './sheets/weekly/weekly.component';
import { MonthlyComponent } from './sheets/monthly/monthly.component';
import { QuarterlyComponent } from './sheets/quarterly/quarterly.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    CashflowWrapperComponent,
    AllCashflowComponent,
    NewSheetComponent,
    ViewSheetComponent,
    WeeklyComponent,
    MonthlyComponent,
    QuarterlyComponent,
    DashboardComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    CashflowRoutingModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDropDownListModule,
    jqxWindowModule
  ]
})
export class CashflowModule { }
