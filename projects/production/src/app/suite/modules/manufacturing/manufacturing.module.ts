import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';

import { ManufacturingRoutingModule } from './manufacturing-routing.module';

import { ManufacturingWrapperComponent } from './manufacturing-wrapper/manufacturing-wrapper.component';
import { AllManufacturingComponent } from './all-manufacturing/all-manufacturing.component';


@NgModule({
  declarations: [
    ManufacturingWrapperComponent,
    AllManufacturingComponent
  ],
  imports: [
    CommonModule,
    ManufacturingRoutingModule,
    jqxGridModule
  ]
})
export class ManufacturingModule { }
