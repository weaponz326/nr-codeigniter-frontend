import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsRoutingModule } from './terms-routing.module';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';

import { TermsWrapperComponent } from './terms-wrapper/terms-wrapper.component';
import { AllTermsComponent } from './all-terms/all-terms.component';
import { NewTermComponent } from './new-term/new-term.component';
import { ViewTermComponent } from './view-term/view-term.component';
import { TermFormComponent } from './term-form/term-form.component';
import { TermActivitiesComponent } from './term-activities/term-activities.component';


@NgModule({
  declarations: [
    TermsWrapperComponent, 
    AllTermsComponent, 
    NewTermComponent, 
    ViewTermComponent, 
    TermFormComponent, TermActivitiesComponent
  ],
  imports: [
    CommonModule,
    TermsRoutingModule,
    jqxGridModule,
    jqxButtonModule,
    jqxInputModule,
    jqxComboBoxModule,
    jqxDateTimeInputModule
  ]
})
export class TermsModule { }
