// main landing page for personal suite
// contains wrapper for page
// whilst the rest of page components are imported from suite page in appliation project

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestPageRoutingModule } from './guest-page-routing.module';
import { MainPagesModule } from '../main-pages/main-pages.module';

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
