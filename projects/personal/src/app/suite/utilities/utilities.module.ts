import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxLoaderModule } from 'jqwidgets-ng/jqxloader';

import { GeneralConfirmComponent } from './general-confirm/general-confirm.component';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { AccessDenyComponent } from './access-deny/access-deny.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [
    GeneralConfirmComponent,
    DeleteConfirmComponent,
    AccessDenyComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    CommonModule,
    jqxWindowModule,
    jqxButtonModule,
    jqxLoaderModule,
  ],
  exports: [
    GeneralConfirmComponent,
    DeleteConfirmComponent,
    AccessDenyComponent,
  ]
})
export class UtilitiesModule { }
