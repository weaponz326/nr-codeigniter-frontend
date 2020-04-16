import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuitePageRoutingModule } from './suite-page-routing.module';
import { GuestTopComponent } from './guest-top/guest-top.component';
import { UserTopComponent } from './user-top/user-top.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    GuestTopComponent, 
    UserTopComponent, 
    AboutComponent, 
    PricingComponent, 
    ContactComponent
  ],
  imports: [
    CommonModule,
    SuitePageRoutingModule
  ]
})
export class SuitePageModule { }
