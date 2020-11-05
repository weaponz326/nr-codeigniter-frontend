import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxLoaderModule } from 'jqwidgets-ng/jqxloader';
import { jqxNotificationModule } from 'jqwidgets-ng/jqxnotification';

import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { AccessDenyComponent } from './access-deny/access-deny.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ConnectionNotificationComponent } from './connection-notification/connection-notification.component';


@NgModule({
  declarations: [
    DeleteConfirmComponent,
    AccessDenyComponent,
    LoadingSpinnerComponent,
    ConnectionNotificationComponent,
  ],
  imports: [
    CommonModule,
    jqxWindowModule,
    jqxButtonModule,
    jqxLoaderModule,
    jqxNotificationModule, 
  ],
  exports: [
    DeleteConfirmComponent,
    AccessDenyComponent,
    LoadingSpinnerComponent,
    ConnectionNotificationComponent,
  ]
})
export class UtilitiesModule { }
