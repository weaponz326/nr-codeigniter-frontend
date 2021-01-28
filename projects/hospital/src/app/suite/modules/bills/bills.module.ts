// edit bill components are in a sub folder

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';

import { BillsRoutingModule } from './bills-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';

import { BillsWrapperComponent } from './bills-wrapper/bills-wrapper.component';
import { AllBillsComponent } from './all-bills/all-bills.component';
import { NewBillComponent } from './new-bill/new-bill.component';
import { ViewBillComponent } from './view-bill/view-bill.component';
import { BillDetailsComponent } from './bill-details/bill-details.component';
import { SelectPatientComponent } from './select-patient/select-patient.component';
import { SelectAdmissionComponent } from './select-admission/select-admission.component';
import { AddGeneralComponent } from './add-general/add-general.component';
import { EditGeneralComponent } from './edit-general/edit-general.component';
import { GeneralFormComponent } from './general-form/general-form.component';
import { GeneralDetailsComponent } from './general-details/general-details.component';


@NgModule({
  declarations: [
    BillsWrapperComponent,
    AllBillsComponent,
    NewBillComponent,
    ViewBillComponent,
    BillDetailsComponent,
    SelectPatientComponent,
    SelectAdmissionComponent,
    AddGeneralComponent,
    EditGeneralComponent,
    GeneralFormComponent,
    GeneralDetailsComponent
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
    jqxNumberInputModule
  ]
})
export class BillsModule { }
