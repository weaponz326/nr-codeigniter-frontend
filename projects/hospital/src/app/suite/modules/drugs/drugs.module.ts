import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrugsRoutingModule } from './drugs-routing.module';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';

import { DrugsWrapperComponent } from './drugs-wrapper/drugs-wrapper.component';
import { AllDrugsComponent } from './all-drugs/all-drugs.component';
import { NewDrugComponent } from './new-drug/new-drug.component';
import { ViewDrugComponent } from './view-drug/view-drug.component';
import { DrugFormComponent } from './drug-form/drug-form.component';


@NgModule({
  declarations: [
    DrugsWrapperComponent,
    AllDrugsComponent,
    NewDrugComponent,
    ViewDrugComponent,
    DrugFormComponent
  ],
  imports: [
    CommonModule,
    DrugsRoutingModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxNumberInputModule,
    jqxTextAreaModule,
    jqxComboBoxModule
  ]
})
export class DrugsModule { }
