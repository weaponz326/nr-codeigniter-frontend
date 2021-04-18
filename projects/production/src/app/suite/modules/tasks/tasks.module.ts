import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { TasksWrapperComponent } from './tasks-wrapper/tasks-wrapper.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    TasksWrapperComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    UtilitiesModule,
    DashboardModule,
  ]
})
export class TasksModule { }
