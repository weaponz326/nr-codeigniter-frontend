import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LettersRoutingModule } from './letters-routing.module';
import { jqxTabsModule } from 'jqwidgets-ng/jqxtabs';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxFileUploadModule } from 'jqwidgets-ng/jqxfileupload';

import { LettersWrapperComponent } from './letters-wrapper/letters-wrapper.component';
import { AllLettersComponent } from './all-letters/all-letters.component';
import { AddReceivedComponent } from './add-received/add-received.component';
import { EditReceivedComponent } from './edit-received/edit-received.component';
import { ReceivedFormComponent } from './received-form/received-form.component';
import { AddSentComponent } from './add-sent/add-sent.component';
import { EditSentComponent } from './edit-sent/edit-sent.component';
import { SentFormComponent } from './sent-form/sent-form.component';


@NgModule({
  declarations: [
    LettersWrapperComponent, 
    AllLettersComponent, 
    AddReceivedComponent, 
    EditReceivedComponent, 
    ReceivedFormComponent, 
    AddSentComponent, 
    EditSentComponent, 
    SentFormComponent
  ],
  imports: [
    CommonModule,
    LettersRoutingModule,
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
