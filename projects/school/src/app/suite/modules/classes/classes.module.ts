import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxListBoxModule } from 'jqwidgets-ng/jqxlistbox';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

import { ClassesRoutingModule } from './classes-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { ClassesWrapperComponent } from './classes-wrapper/classes-wrapper.component';
import { AllClassesComponent } from './all-classes/all-classes.component';
import { NewClassComponent } from './new-class/new-class.component';
import { ViewClassComponent } from './view-class/view-class.component';
import { ClassFormComponent } from './class-form/class-form.component';
import { SubjectsTableComponent } from './subjects-table/subjects-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { SelectSubjectComponent } from './select-subject/select-subject.component';
import { ClassStudentsComponent } from './class-students/class-students.component';
import { SelectStudentComponent } from './select-student/select-student.component';


@NgModule({
  declarations: [
    ClassesWrapperComponent,
    AllClassesComponent,
    NewClassComponent,
    ViewClassComponent,
    ClassFormComponent,
    SubjectsTableComponent,
    DashboardComponent,
    SettingsComponent,
    SelectSubjectComponent,
    ClassStudentsComponent,
    SelectStudentComponent
  ],
  imports: [
    CommonModule,
    ClassesRoutingModule,
    UtilitiesModule,
    DashboardModule,
    jqxGridModule,
    jqxButtonModule,
    jqxInputModule,
    jqxComboBoxModule,
    jqxDropDownListModule,
    jqxListBoxModule,
    jqxWindowModule,
  ]
})
export class ClassesModule { }
