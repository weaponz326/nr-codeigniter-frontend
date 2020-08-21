import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    CommonModule
  ],
  exports: [
    GeneralConfirmComponent,
    DeleteConfirmComponent,
    AccessDenyComponent,
  ]
})
export class UtilitiesModule { }
