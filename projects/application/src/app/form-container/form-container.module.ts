// contains container body for all forms
// also contains template for suite registion forms

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormContainerComponent } from './form-container/form-container.component';


@NgModule({
  declarations: [
    FormContainerComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormContainerComponent,
  ]
})
export class FormContainerModule { }
