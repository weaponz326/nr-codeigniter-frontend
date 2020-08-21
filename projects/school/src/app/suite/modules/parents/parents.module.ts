import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxRadioButtonModule } from 'jqwidgets-ng/jqxradiobutton';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';

import { ParentsRoutingModule } from './parents-routing.module';

import { ParentsWrapperComponent } from './parents-wrapper/parents-wrapper.component';
import { AllParentsComponent } from './all-parents/all-parents.component';
import { NewParentComponent } from './new-parent/new-parent.component';
import { ViewParentComponent } from './view-parent/view-parent.component';
import { ParentFormComponent } from './parent-form/parent-form.component';
import { ParentWardsComponent } from './parent-wards/parent-wards.component';


@NgModule({
  declarations: [
    ParentsWrapperComponent,
    AllParentsComponent,
    NewParentComponent,
    ViewParentComponent,
    ParentFormComponent, ParentWardsComponent
  ],
  imports: [
    CommonModule,
    ParentsRoutingModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxRadioButtonModule,
    jqxTextAreaModule
  ]
})
export class ParentsModule { }
