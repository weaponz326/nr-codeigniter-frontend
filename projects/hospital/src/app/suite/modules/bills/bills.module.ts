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

import { BillsWrapperComponent } from './bills-wrapper/bills-wrapper.component';
import { AllBillsComponent } from './all-bills/all-bills.component';
import { NewBillComponent } from './new-bill/new-bill.component';
import { ViewBillComponent } from './view-bill/view-bill.component';
import { BillDetailsComponent } from './bill-details/bill-details.component';
import { TreatmentComponent } from './edit-bill/treatment/treatment.component';
import { DoctorsComponent } from './edit-bill/doctors/doctors.component';
import { MedicineComponent } from './edit-bill/medicine/medicine.component';
import { LaboratoryComponent } from './edit-bill/laboratory/laboratory.component';
import { WardComponent } from './edit-bill/ward/ward.component';
import { ServicesComponent } from './edit-bill/services/services.component';


@NgModule({
  declarations: [
    BillsWrapperComponent,
    AllBillsComponent,
    NewBillComponent,
    ViewBillComponent,
    BillDetailsComponent,
    TreatmentComponent,
    DoctorsComponent,
    MedicineComponent,
    LaboratoryComponent,
    WardComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    BillsRoutingModule,
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
