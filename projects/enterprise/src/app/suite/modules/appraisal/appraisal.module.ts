import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppraisalRoutingModule } from './appraisal-routing.module';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxFormModule } from 'jqwidgets-ng/jqxform';

import { AppraisalWrapperComponent } from './appraisal-wrapper/appraisal-wrapper.component';
import { AllAppraisalComponent } from './all-appraisal/all-appraisal.component';
import { NewAppraisalComponent } from './new-appraisal/new-appraisal.component';
import { ViewAppraisalComponent } from './view-appraisal/view-appraisal.component';
import { AppraisalFormComponent } from './appraisal-form/appraisal-form.component';


@NgModule({
  declarations: [
    AppraisalWrapperComponent, 
    AllAppraisalComponent, 
    NewAppraisalComponent, 
    ViewAppraisalComponent, AppraisalFormComponent
  ],
  imports: [
    CommonModule,
    AppraisalRoutingModule,
    jqxButtonModule,
    jqxGridModule,
    jqxWindowModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxDropDownListModule,
    jqxFormModule
  ]
})
export class AppraisalModule { }