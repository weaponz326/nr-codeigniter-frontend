import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

import { FeesRoutingModule } from './fees-routing.module';

import { FeesWrapperComponent } from './fees-wrapper/fees-wrapper.component';
import { AllBillsComponent } from './all-bills/all-bills.component';
import { StudentBillComponent } from './student-bill/student-bill.component';
import { AllFeesComponent } from './all-fees/all-fees.component';
import { CreateFeesComponent } from './create-fees/create-fees.component';
import { ViewFeesComponent } from './view-fees/view-fees.component';
import { BillDetailsComponent } from './bill-details/bill-details.component';
import { FeesDetailsComponent } from './fees-details/fees-details.component';


@NgModule({
  declarations: [
    FeesWrapperComponent,
    AllBillsComponent,
    StudentBillComponent,
    AllFeesComponent,
    CreateFeesComponent,
    ViewFeesComponent,
    BillDetailsComponent,
    FeesDetailsComponent,
  ],
  imports: [
    CommonModule,
    FeesRoutingModule,
    jqxGridModule,
    jqxButtonModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxDropDownListModule,
    jqxComboBoxModule,
    jqxWindowModule
  ]
})
export class FeesModule { }
