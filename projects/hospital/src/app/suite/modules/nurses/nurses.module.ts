import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NursesRoutingModule } from './nurses-routing.module';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxRadioButtonModule } from 'jqwidgets-ng/jqxradiobutton';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';

import { NursesWrapperComponent } from './nurses-wrapper/nurses-wrapper.component';
import { AllNursesComponent } from './all-nurses/all-nurses.component';
import { NewNurseComponent } from './new-nurse/new-nurse.component';
import { ViewNurseComponent } from './view-nurse/view-nurse.component';
import { NurseFormComponent } from './nurse-form/nurse-form.component';


@NgModule({
  declarations: [
    NursesWrapperComponent,
    AllNursesComponent,
    NewNurseComponent,
    ViewNurseComponent,
    NurseFormComponent
  ],
  imports: [
    CommonModule,
    NursesRoutingModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxRadioButtonModule,
    jqxTextAreaModule
  ]
})
export class NursesModule { }
