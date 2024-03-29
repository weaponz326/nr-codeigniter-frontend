import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxFormModule } from 'jqwidgets-ng/jqxform';
import { jqxPanelModule } from 'jqwidgets-ng/jqxpanel';
import { jqxRadioButtonModule } from 'jqwidgets-ng/jqxradiobutton';

import { AppraisalRoutingModule } from './appraisal-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { AppraisalWrapperComponent } from './appraisal-wrapper/appraisal-wrapper.component';
import { AllAppraisalComponent } from './all-appraisal/all-appraisal.component';
import { NewAppraisalComponent } from './new-appraisal/new-appraisal.component';
import { ViewAppraisalComponent } from './view-appraisal/view-appraisal.component';
import { AppraisalFormComponent } from './appraisal-form/appraisal-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AppraisalEmployeesComponent } from './appraisal-employees/appraisal-employees.component';


@NgModule({
  declarations: [
    AppraisalWrapperComponent,
    AllAppraisalComponent,
    NewAppraisalComponent,
    ViewAppraisalComponent,
    AppraisalFormComponent,
    DashboardComponent,
    SettingsComponent,
    AppraisalEmployeesComponent
  ],
  imports: [
    CommonModule,
    AppraisalRoutingModule,
    UtilitiesModule,
    DashboardModule,
    ChartsModule,
    jqxButtonModule,
    jqxGridModule,
    jqxWindowModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxDropDownListModule,
    jqxFormModule,
    jqxPanelModule,
    jqxRadioButtonModule,
  ]
})
export class AppraisalModule { }
