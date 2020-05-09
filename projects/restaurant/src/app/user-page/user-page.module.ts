import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPageRoutingModule } from './user-page-routing.module';
import { UserWrapperComponent } from './user-wrapper/user-wrapper.component';
import { SuitePageModule } from 'projects/application/src/app/suite-page/suite-page.module';


@NgModule({
  declarations: [UserWrapperComponent],
  imports: [
    CommonModule,
    UserPageRoutingModule,
    SuitePageModule
  ]
})
export class UserPageModule { }
