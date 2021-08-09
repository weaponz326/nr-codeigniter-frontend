import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';

import { ExecutivesRoutingModule } from './executives-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { ExecutivesWrapperComponent } from './executives-wrapper/executives-wrapper.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AllExecutivesComponent } from './all-executives/all-executives.component';
import { NewExecutiveComponent } from './new-executive/new-executive.component';
import { ViewExecutiveComponent } from './view-executive/view-executive.component';
import { ExecutiveFormComponent } from './executive-form/executive-form.component';


@NgModule({
  declarations: [
    ExecutivesWrapperComponent,
    DashboardComponent,
    SettingsComponent,
    AllExecutivesComponent,
    NewExecutiveComponent,
    ViewExecutiveComponent,
    ExecutiveFormComponent
  ],
  imports: [
    CommonModule,
    ExecutivesRoutingModule,
    UtilitiesModule,
    DashboardModule,
    ChartsModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDateTimeInputModule,
  ]
})
export class ExecutivesModule { }
