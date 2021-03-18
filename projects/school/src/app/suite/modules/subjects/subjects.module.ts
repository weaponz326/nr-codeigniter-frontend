import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';

import { SubjectsRoutingModule } from './subjects-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { AllSubjectsComponent } from './all-subjects/all-subjects.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { ViewSubjectComponent } from './view-subject/view-subject.component';
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { SubjectsWrapperComponent } from './subjects-wrapper/subjects-wrapper.component';
import { TeachersTableComponent } from './teachers-table/teachers-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    SubjectsWrapperComponent,
    AllSubjectsComponent,
    AddSubjectComponent,
    ViewSubjectComponent,
    SubjectFormComponent, 
    TeachersTableComponent, 
    DashboardComponent, 
    SettingsComponent
  ],
  imports: [
    CommonModule,
    SubjectsRoutingModule,
    UtilitiesModule,
    DashboardModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxComboBoxModule,
    jqxDropDownListModule,
    jqxTextAreaModule
  ]
})
export class SubjectsModule { }
