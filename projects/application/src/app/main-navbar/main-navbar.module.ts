// module contains only main navbar component

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { MainNavbarApiService } from './main-navbar-api.service';


@NgModule({
  declarations: [MainNavbarComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
      MainNavbarComponent
  ],
  providers: [
    MainNavbarApiService
  ]
})
export class MainNavbarModule { }
