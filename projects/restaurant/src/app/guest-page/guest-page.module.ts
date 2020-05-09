import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestPageRoutingModule } from './guest-page-routing.module';
import { GuestWrapperComponent } from './guest-wrapper/guest-wrapper.component';
import { SuitePageModule } from 'projects/application/src/app/suite-page/suite-page.module';


@NgModule({
  declarations: [GuestWrapperComponent],
  imports: [
    CommonModule,
    GuestPageRoutingModule,
    SuitePageModule
  ]
})
export class GuestPageModule { }
