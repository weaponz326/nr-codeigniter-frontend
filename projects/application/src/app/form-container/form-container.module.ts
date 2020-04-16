// contains container body for all forms
// also contains template for suite registion forms

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormContainerComponent } from './form-container/form-container.component';
import { SuiteFormComponent } from './suite-form/suite-form.component';
import { SuiteSuccessComponent } from './suite-success/suite-success.component';



@NgModule({
  declarations: [
    FormContainerComponent, 
    SuiteFormComponent, 
    SuiteSuccessComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormContainerComponent,
    SuiteFormComponent,
    SuiteSuccessComponent
  ]
})
export class FormContainerModule { }
