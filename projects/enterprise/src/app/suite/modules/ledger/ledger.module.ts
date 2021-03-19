import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LedgerRoutingModule } from './ledger-routing.module';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

import { LedgerWrapperComponent } from './ledger-wrapper/ledger-wrapper.component';
import { AllLedgerComponent } from './all-ledger/all-ledger.component';
import { NewLedgerComponent } from './new-ledger/new-ledger.component';
import { ViewLedgerComponent } from './view-ledger/view-ledger.component';
import { LedgerTableComponent } from './ledger-table/ledger-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    LedgerWrapperComponent, 
    AllLedgerComponent, 
    NewLedgerComponent, 
    ViewLedgerComponent, 
    LedgerTableComponent, DashboardComponent, SettingsComponent
  ],
  imports: [
    CommonModule,
    LedgerRoutingModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxWindowModule
  ]
})
export class LedgerModule { }
