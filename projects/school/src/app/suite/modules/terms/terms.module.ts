import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxDropDownList';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';

import { TermsRoutingModule } from './terms-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { TermsWrapperComponent } from './terms-wrapper/terms-wrapper.component';
import { AllTermsComponent } from './all-terms/all-terms.component';
import { NewTermComponent } from './new-term/new-term.component';
import { ViewTermComponent } from './view-term/view-term.component';
import { TermFormComponent } from './term-form/term-form.component';
import { TermActivitiesComponent } from './term-activities/term-activities.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    TermsWrapperComponent,
    AllTermsComponent,
    NewTermComponent,
    ViewTermComponent,
    TermFormComponent,
    TermActivitiesComponent,
    DashboardComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    TermsRoutingModule,
    UtilitiesModule,
    DashboardModule,
    ChartsModule,
    jqxGridModule,
    jqxButtonModule,
    jqxInputModule,
    jqxComboBoxModule,
    jqxDropDownListModule,
    jqxDateTimeInputModule
  ]
})
export class TermsModule { }
