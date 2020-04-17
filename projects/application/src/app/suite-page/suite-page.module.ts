import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestTopComponent } from './guest-top/guest-top.component';
import { UserTopComponent } from './user-top/user-top.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { SuiteScrollnavComponent } from './suite-scrollnav/suite-scrollnav.component';

@NgModule({
  declarations: [
    GuestTopComponent, 
    UserTopComponent, 
    AboutComponent, 
    PricingComponent, 
    ContactComponent, 
    SuiteScrollnavComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    GuestTopComponent,
    UserTopComponent,
    AboutComponent,
    PricingComponent,
    ContactComponent,
    SuiteScrollnavComponent
  ]
})
export class SuitePageModule { }
