// module contains all components that makes up the main landing page

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainNavbarModule } from '../main-navbar/main-navbar.module';

import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { MainScrollnavComponent } from './main-scrollnav/main-scrollnav.component';
import { MainTopComponent } from './main-top/main-top.component';
import { SuiteLeftComponent } from './suite-left/suite-left.component';
import { SuiteRightComponent } from './suite-right/suite-right.component';


@NgModule({
  declarations: [
    MainWrapperComponent, 
    MainScrollnavComponent, 
    MainTopComponent, 
    SuiteLeftComponent, 
    SuiteRightComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    MainNavbarModule
  ]
})
export class MainPageModule { }
