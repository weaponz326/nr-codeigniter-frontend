import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestPageRoutingModule } from './guest-page-routing.module';
import { MainPagesModule } from 'projects/personal/src/app/main-pages/main-pages.module';

import { GuestWrapperComponent } from './guest-wrapper/guest-wrapper.component';


@NgModule({
  declarations: [GuestWrapperComponent],
  imports: [
    CommonModule,
    GuestPageRoutingModule,
    MainPagesModule
  ]
})
export class GuestPageModule { }
