import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuiteRoutingModule } from './suite-routing.module';
import { jqxTooltipModule } from 'jqwidgets-ng/jqxtooltip';

import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SuiteRoutingModule,
    jqxTooltipModule
  ]
})
export class SuiteModule { }
