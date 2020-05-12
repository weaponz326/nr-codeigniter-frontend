import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxRadioButtonModule } from 'jqwidgets-ng/jqxradiobutton';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';

import { TeachersWrapperComponent } from './teachers-wrapper/teachers-wrapper.component';
import { AllTeachersComponent } from './all-teachers/all-teachers.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { ViewTeacherComponent } from './view-teacher/view-teacher.component';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';


@NgModule({
  declarations: [
    TeachersWrapperComponent, 
    AllTeachersComponent, 
    AddTeacherComponent, 
    ViewTeacherComponent, 
    TeacherFormComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxRadioButtonModule,
    jqxTextAreaModule,
    jqxDropDownListModule
  ]
})
export class TeachersModule { }
