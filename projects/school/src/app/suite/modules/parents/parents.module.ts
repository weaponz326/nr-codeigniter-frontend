import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

import { ParentsRoutingModule } from './parents-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { ParentsWrapperComponent } from './parents-wrapper/parents-wrapper.component';
import { AllParentsComponent } from './all-parents/all-parents.component';
import { NewParentComponent } from './new-parent/new-parent.component';
import { ViewParentComponent } from './view-parent/view-parent.component';
import { ParentFormComponent } from './parent-form/parent-form.component';
import { ParentWardsComponent } from './parent-wards/parent-wards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { SelectWardComponent } from './select-ward/select-ward.component';


@NgModule({
  declarations: [
    ParentsWrapperComponent,
    AllParentsComponent,
    NewParentComponent,
    ViewParentComponent,
    ParentFormComponent, 
    ParentWardsComponent, 
    DashboardComponent, 
    SettingsComponent, SelectWardComponent,
  ],
  imports: [
    CommonModule,
    ParentsRoutingModule,
    UtilitiesModule,
    DashboardModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDropDownListModule,
    jqxTextAreaModule,
    jqxWindowModule,
  ]
})
export class ParentsModule { }
