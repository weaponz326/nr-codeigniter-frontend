import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

import { SectionsRoutingModule } from './sections-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { SectionsWrapperComponent } from './sections-wrapper/sections-wrapper.component';
import { AllSectionsComponent } from './all-sections/all-sections.component';
import { NewSectionComponent } from './new-section/new-section.component';
import { ViewSectionComponent } from './view-section/view-section.component';
import { SectionStudentsComponent } from './section-students/section-students.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    SectionsWrapperComponent,
    AllSectionsComponent,
    NewSectionComponent,
    ViewSectionComponent,
    SectionStudentsComponent,
    DashboardComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    SectionsRoutingModule,
    UtilitiesModule,
    DashboardModule,
    ChartsModule,
    jqxGridModule,
    jqxButtonModule,
    jqxInputModule,
    jqxWindowModule,
  ]
})
export class SectionsModule { }
