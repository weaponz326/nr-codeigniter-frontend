import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuiteRoutingModule } from './suite-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SuiteRoutingModule
  ]
})
export class SuiteModule { }
