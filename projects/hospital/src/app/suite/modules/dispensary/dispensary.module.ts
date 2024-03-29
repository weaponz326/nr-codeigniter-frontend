import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';

import { DispensaryRoutingModule } from './dispensary-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { DispensaryWrapperComponent } from './dispensary-wrapper/dispensary-wrapper.component';
import { AllDispenseComponent } from './all-dispense/all-dispense.component';
import { NewDispenseComponent } from './new-dispense/new-dispense.component';
import { ViewDispenseComponent } from './view-dispense/view-dispense.component';
import { SelectPrescriptionComponent } from './select-prescription/select-prescription.component';
import { DispenseDetailsComponent } from './dispense-details/dispense-details.component';
import { AddDetailComponent } from './add-detail/add-detail.component';
import { EditDetailComponent } from './edit-detail/edit-detail.component';
import { DetailFormComponent } from './detail-form/detail-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { SelectDrugComponent } from './select-drug/select-drug.component';


@NgModule({
  declarations: [
    DispensaryWrapperComponent,
    AllDispenseComponent,
    NewDispenseComponent,
    ViewDispenseComponent,
    SelectPrescriptionComponent,
    DispenseDetailsComponent,
    AddDetailComponent,
    EditDetailComponent,
    DetailFormComponent,
    DashboardComponent,
    SettingsComponent,
    SelectDrugComponent,
  ],
  imports: [
    CommonModule,
    DispensaryRoutingModule,
    UtilitiesModule,
    DashboardModule,
    ChartsModule,
    jqxButtonModule,
    jqxGridModule,
    jqxWindowModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxDropDownListModule,
    jqxTextAreaModule,
  ]
})
export class DispensaryModule { }
