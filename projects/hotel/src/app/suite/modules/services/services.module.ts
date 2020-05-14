import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesWrapperComponent } from './services-wrapper/services-wrapper.component';
import { AllServicesComponent } from './all-services/all-services.component';
import { ServicesDetailsComponent } from './services-details/services-details.component';
import { ViewServicesComponent } from './view-services/view-services.component';
import { AddServicesComponent } from './add-services/add-services.component';


@NgModule({
  declarations: [
    ServicesWrapperComponent, 
    AllServicesComponent, 
    ServicesDetailsComponent, 
    ViewServicesComponent, 
    AddServicesComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    jqxButtonModule,
    jqxGridModule,
    jqxWindowModule,
    jqxInputModule,
    jqxDropDownListModule,
    jqxComboBoxModule
  ]
})
export class ServicesModule { }
