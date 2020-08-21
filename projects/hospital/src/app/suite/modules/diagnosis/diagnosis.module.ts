import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';

import { DiagnosisRoutingModule } from './diagnosis-routing.module';

import { DiagnosisWrapperComponent } from './diagnosis-wrapper/diagnosis-wrapper.component';
import { AllDiagnosisComponent } from './all-diagnosis/all-diagnosis.component';
import { AddDiagnosisComponent } from './add-diagnosis/add-diagnosis.component';
import { ViewDiagnosisComponent } from './view-diagnosis/view-diagnosis.component';
import { DiagnosisDetailsComponent } from './diagnosis-details/diagnosis-details.component';


@NgModule({
  declarations: [
    DiagnosisWrapperComponent,
    AllDiagnosisComponent,
    AddDiagnosisComponent,
    ViewDiagnosisComponent,
    DiagnosisDetailsComponent,
  ],
  imports: [
    CommonModule,
    DiagnosisRoutingModule,
    jqxButtonModule,
    jqxGridModule,
    jqxWindowModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxDropDownListModule,
    jqxTextAreaModule
  ]
})
export class DiagnosisModule { }
