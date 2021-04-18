import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ProjectsWrapperComponent } from './projects-wrapper/projects-wrapper.component';


@NgModule({
  declarations: [
  DashboardComponent,
  SettingsComponent,
  ProjectsWrapperComponent
],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    UtilitiesModule,
    DashboardModule,
  ]
})
export class ProjectsModule { }
