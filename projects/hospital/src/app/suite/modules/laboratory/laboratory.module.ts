import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

import { LaboratoryRoutingModule } from './laboratory-routing.module';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';

import { LaboratoryWrapperComponent } from './laboratory-wrapper/laboratory-wrapper.component';
import { AllLabsComponent } from './all-labs/all-labs.component';
import { NewLabComponent } from './new-lab/new-lab.component';
import { ViewLabComponent } from './view-lab/view-lab.component';
import { LabTestsComponent } from './lab-tests/lab-tests.component';


@NgModule({
  declarations: [
    LaboratoryWrapperComponent, 
    AllLabsComponent, 
    NewLabComponent, 
    ViewLabComponent, 
    LabTestsComponent
  ],
  imports: [
    CommonModule,
    LaboratoryRoutingModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxDropDownListModule,
    jqxWindowModule
  ]
})
export class LaboratoryModule { }
