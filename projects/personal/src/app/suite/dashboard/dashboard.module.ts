// templates for all modules dashborads across all suites

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidenavComponent } from './sidenav/sidenav.component';
import { TopnavComponent } from './topnav/topnav.component';



@NgModule({
  declarations: [
    SidenavComponent,
    TopnavComponent,
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    SidenavComponent,
    TopnavComponent,
  ]
})
export class DashboardModule { }
