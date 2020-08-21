import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxRadioButtonModule } from 'jqwidgets-ng/jqxradiobutton';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';

import { WorkersRoutingModule } from './workers-routing.module';

import { AllWorkersComponent } from './all-workers/all-workers.component';
import { WorkersWrapperComponent } from './workers-wrapper/workers-wrapper.component';
import { NewWorkerComponent } from './new-worker/new-worker.component';
import { ViewWorkerComponent } from './view-worker/view-worker.component';
import { WorkerFormComponent } from './worker-form/worker-form.component';


@NgModule({
  declarations: [
    AllWorkersComponent,
    WorkersWrapperComponent,
    NewWorkerComponent,
    ViewWorkerComponent,
    WorkerFormComponent
  ],
  imports: [
    CommonModule,
    WorkersRoutingModule,
    jqxGridModule,
    jqxButtonModule,
    jqxInputModule,
    jqxRadioButtonModule,
    jqxDateTimeInputModule,
    jqxTextAreaModule
  ]
})
export class WorkersModule { }
