import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';

import { PayrollRoutingModule } from './payroll-routing.module';

import { PayrollWrapperComponent } from './payroll-wrapper/payroll-wrapper.component';
import { AllPayrollComponent } from './all-payroll/all-payroll.component';
import { GeneratePayrollComponent } from './generate-payroll/generate-payroll.component';
import { ViewPayrollComponent } from './view-payroll/view-payroll.component';
import { EmployeePayrollComponent } from './employee-payroll/employee-payroll.component';
import { PayrollDetailsComponent } from './payroll-details/payroll-details.component';


@NgModule({
  declarations: [
    PayrollWrapperComponent,
    AllPayrollComponent,
    GeneratePayrollComponent,
    ViewPayrollComponent,
    EmployeePayrollComponent,
    PayrollDetailsComponent,
  ],
  imports: [
    CommonModule,
    PayrollRoutingModule,
    jqxButtonModule,
    jqxGridModule,
    jqxWindowModule,
    jqxInputModule,
    jqxDropDownListModule,
    jqxDateTimeInputModule,
    jqxNumberInputModule
  ]
})
export class PayrollModule { }
