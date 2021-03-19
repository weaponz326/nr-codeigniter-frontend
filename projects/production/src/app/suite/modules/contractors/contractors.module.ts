import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';

import { ContractorsRoutingModule } from './contractors-routing.module';

import { ContractorsWrapperComponent } from './contractors-wrapper/contractors-wrapper.component';
import { AllContractorsComponent } from './all-contractors/all-contractors.component';
import { AddContractorComponent } from './add-contractor/add-contractor.component';
import { ViewContractorComponent } from './view-contractor/view-contractor.component';
import { ContractorFormComponent } from './contractor-form/contractor-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    ContractorsWrapperComponent,
    AllContractorsComponent,
    AddContractorComponent,
    ViewContractorComponent,
    ContractorFormComponent,
    DashboardComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    ContractorsRoutingModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxComboBoxModule,
    jqxTextAreaModule
  ]
})
export class ContractorsModule { }
