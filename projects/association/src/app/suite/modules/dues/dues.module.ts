import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DuesRoutingModule } from './dues-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { DuesWrapperComponent } from './dues-wrapper/dues-wrapper.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    DuesWrapperComponent,
    DashboardComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    DuesRoutingModule,
    UtilitiesModule,
    DashboardModule,
  ]
})
export class DuesModule { }
