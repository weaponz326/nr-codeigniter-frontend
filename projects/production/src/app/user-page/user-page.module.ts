import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPageRoutingModule } from './user-page-routing.module';
import { MainPagesModule } from 'projects/personal/src/app/main-pages/main-pages.module';

import { UserWrapperComponent } from './user-wrapper/user-wrapper.component';


@NgModule({
  declarations: [UserWrapperComponent],
  imports: [
    CommonModule,
    UserPageRoutingModule,
    MainPagesModule
  ]
})
export class UserPageModule { }
