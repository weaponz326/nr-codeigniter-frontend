import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';

import { BillsRoutingModule } from './bills-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';

import { BillsWrapperComponent } from './bills-wrapper/bills-wrapper.component';
import { AllBillsComponent } from './all-bills/all-bills.component';
import { NewBillComponent } from './new-bill/new-bill.component';
import { ViewBillComponent } from './view-bill/view-bill.component';
import { BillDetailsComponent } from './bill-details/bill-details.component';


@NgModule({
  declarations: [
    BillsWrapperComponent,
    AllBillsComponent,
    NewBillComponent,
    ViewBillComponent,
    BillDetailsComponent,
  ],
  imports: [
    CommonModule,
    BillsRoutingModule,
    UtilitiesModule,
    jqxButtonModule,
    jqxGridModule,
    jqxWindowModule,
    jqxInputModule,
    jqxDropDownListModule,
    jqxDateTimeInputModule,
    jqxNumberInputModule,
    jqxComboBoxModule
  ]
})
export class BillsModule { }
