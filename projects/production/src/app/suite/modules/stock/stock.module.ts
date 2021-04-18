import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

import { StockRoutingModule } from './stock-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { StockWrapperComponent } from './stock-wrapper/stock-wrapper.component';
import { AllStockComponent } from './all-stock/all-stock.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { StockFormComponent } from './stock-form/stock-form.component';


@NgModule({
  declarations: [
    StockWrapperComponent,
    AllStockComponent,
    DashboardComponent,
    SettingsComponent,
    AddStockComponent,
    EditStockComponent,
    StockFormComponent
  ],
  imports: [
    CommonModule,
    StockRoutingModule,
    UtilitiesModule,
    DashboardModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxNumberInputModule,
    jqxComboBoxModule,
    jqxWindowModule
  ]
})
export class StockModule { }
