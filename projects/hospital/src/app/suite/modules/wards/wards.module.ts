import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WardsRoutingModule } from './wards-routing.module';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';

import { WardsWrapperComponent } from './wards-wrapper/wards-wrapper.component';
import { AllWardsComponent } from './all-wards/all-wards.component';
import { NewWardComponent } from './new-ward/new-ward.component';
import { ViewWardComponent } from './view-ward/view-ward.component';
import { WardFormComponent } from './ward-form/ward-form.component';
import { WardPatientsComponent } from './ward-patients/ward-patients.component';


@NgModule({
  declarations: [
    WardsWrapperComponent,
    AllWardsComponent,
    NewWardComponent,
    ViewWardComponent,
    WardFormComponent,
    WardPatientsComponent
  ],
  imports: [
    CommonModule,
    WardsRoutingModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDropDownListModule,
    jqxComboBoxModule
  ]
})
export class WardsModule { }
