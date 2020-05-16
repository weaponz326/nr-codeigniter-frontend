import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';

import { AllDepartmentsComponent } from './all-departments/all-departments.component';
import { DepartmentsWrapperComponent } from './departments-wrapper/departments-wrapper.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ViewDepartmentComponent } from './view-department/view-department.component';
import { DepartmentFormComponent } from './department-form/department-form.component';


@NgModule({
  declarations: [
    AllDepartmentsComponent, 
    DepartmentsWrapperComponent, 
    AddDepartmentComponent, 
    ViewDepartmentComponent, 
    DepartmentFormComponent
  ],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxNumberInputModule,
    jqxDropDownListModule,
    jqxTextAreaModule
  ]
})
export class DepartmentsModule { }
