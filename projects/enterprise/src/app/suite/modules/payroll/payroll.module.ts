import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';

import { PayrollRoutingModule } from './payroll-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { PayrollWrapperComponent } from './payroll-wrapper/payroll-wrapper.component';
import { AllPayrollComponent } from './all-payroll/all-payroll.component';
import { GeneratePayrollComponent } from './generate-payroll/generate-payroll.component';
import { ViewPayrollComponent } from './view-payroll/view-payroll.component';
import { EmployeePayrollComponent } from './employee-payroll/employee-payroll.component';
import { PayrollDetailsComponent } from './payroll-details/payroll-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    PayrollWrapperComponent,
    AllPayrollComponent,
    GeneratePayrollComponent,
    ViewPayrollComponent,
    EmployeePayrollComponent,
    PayrollDetailsComponent,
    DashboardComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    PayrollRoutingModule,
    UtilitiesModule,
    DashboardModule,
    ChartsModule,
    jqxButtonModule,
    jqxGridModule,
    jqxWindowModule,
    jqxInputModule,
    jqxDropDownListModule,
    jqxDateTimeInputModule,
    jqxNumberInputModule,
    jqxComboBoxModule,
  ]
})
export class PayrollModule { }
