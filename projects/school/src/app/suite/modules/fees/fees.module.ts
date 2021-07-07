import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { jqxListBoxModule } from 'jqwidgets-ng/jqxlistbox';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

import { FeesRoutingModule } from './fees-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { FeesWrapperComponent } from './fees-wrapper/fees-wrapper.component';
import { AllBillsComponent } from './all-bills/all-bills.component';
import { StudentBillComponent } from './student-bill/student-bill.component';
import { AllFeesComponent } from './all-fees/all-fees.component';
import { CreateFeesComponent } from './create-fees/create-fees.component';
import { ViewFeesComponent } from './view-fees/view-fees.component';
import { BillDetailsComponent } from './bill-details/bill-details.component';
import { FeesDetailsComponent } from './fees-details/fees-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { SelectClassComponent } from './select-class/select-class.component';
import { AddArrearsComponent } from './add-arrears/add-arrears.component';
import { SelectFeesComponent } from './select-fees/select-fees.component';


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
    DashboardComponent,
    SettingsComponent,
    AddItemComponent,
    EditItemComponent,
    SelectClassComponent,
    AddArrearsComponent,
    SelectFeesComponent,
  ],
  imports: [
    CommonModule,
    FeesRoutingModule,
    UtilitiesModule,
    DashboardModule,
    jqxGridModule,
    jqxButtonModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxDropDownListModule,
    jqxNumberInputModule,
    jqxComboBoxModule,
    jqxListBoxModule,
    jqxWindowModule
  ]
})
export class FeesModule { }
