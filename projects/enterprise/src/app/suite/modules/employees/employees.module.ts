import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxRadioButtonModule } from 'jqwidgets-ng/jqxradiobutton';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';

import { EmployeesWrapperComponent } from './employees-wrapper/employees-wrapper.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';


@NgModule({
  declarations: [
    EmployeesWrapperComponent, 
    AllEmployeesComponent, 
    NewEmployeeComponent, 
    ViewEmployeeComponent, 
    EmployeeFormComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxRadioButtonModule,
    jqxTextAreaModule,
    jqxDropDownListModule
  ]
})
export class EmployeesModule { }
