import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListModule} from 'jqwidgets-ng/jqxdropdownlist';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';

import { TablesRoutingModule } from './tables-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';

import { TablesWrapperComponent } from './tables-wrapper/tables-wrapper.component';
import { AllTablesComponent } from './all-tables/all-tables.component';
import { AddTableComponent } from './add-table/add-table.component';
import { TableFormComponent } from './table-form/table-form.component';
import { ViewTableComponent } from './view-table/view-table.component';


@NgModule({
  declarations: [
    TablesWrapperComponent,
    AllTablesComponent,
    AddTableComponent,
    TableFormComponent,
    ViewTableComponent
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    UtilitiesModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxNumberInputModule,
    jqxDropDownListModule,
    jqxComboBoxModule,
  ]
})
export class TablesModule { }
