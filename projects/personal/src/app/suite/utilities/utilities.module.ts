import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';

import { GeneralConfirmComponent } from './general-confirm/general-confirm.component';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { AccessDenyComponent } from './access-deny/access-deny.component';


@NgModule({
  declarations: [
    GeneralConfirmComponent,
    DeleteConfirmComponent,
    AccessDenyComponent,
  ],
  imports: [
    CommonModule,
    jqxWindowModule,
    jqxButtonModule
  ],
  exports: [
    GeneralConfirmComponent,
    DeleteConfirmComponent,
    AccessDenyComponent,
  ]
})
export class UtilitiesModule { }
