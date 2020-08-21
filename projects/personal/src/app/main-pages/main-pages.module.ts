// guest and user main landing pages for all suites

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuiteScrollnavComponent } from './suite-scrollnav/suite-scrollnav.component';
import { GuestTopComponent } from './guest-top/guest-top.component';
import { UserTopComponent } from './user-top/user-top.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    SuiteScrollnavComponent,
    GuestTopComponent,
    UserTopComponent,
    AboutComponent,
    PricingComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SuiteScrollnavComponent,
    GuestTopComponent,
    UserTopComponent,
    AboutComponent,
    PricingComponent,
    ContactComponent
  ]
})
export class MainPagesModule { }
