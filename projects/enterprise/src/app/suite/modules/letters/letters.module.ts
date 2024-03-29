import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { jqxTabsModule } from 'jqwidgets-ng/jqxtabs';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxFileUploadModule } from 'jqwidgets-ng/jqxfileupload';

import { LettersRoutingModule } from './letters-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { LettersWrapperComponent } from './letters-wrapper/letters-wrapper.component';
import { AllLettersComponent } from './all-letters/all-letters.component';
import { AddReceivedComponent } from './add-received/add-received.component';
import { EditReceivedComponent } from './edit-received/edit-received.component';
import { ReceivedFormComponent } from './received-form/received-form.component';
import { AddSentComponent } from './add-sent/add-sent.component';
import { EditSentComponent } from './edit-sent/edit-sent.component';
import { SentFormComponent } from './sent-form/sent-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    LettersWrapperComponent,
    AllLettersComponent,
    AddReceivedComponent,
    EditReceivedComponent,
    ReceivedFormComponent,
    AddSentComponent,
    EditSentComponent,
    SentFormComponent,
    DashboardComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    LettersRoutingModule,
    UtilitiesModule,
    DashboardModule,
    ChartsModule,
    jqxTabsModule,
    jqxGridModule,
    jqxButtonModule,
    jqxWindowModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxFileUploadModule
  ]
})
export class LettersModule { }
