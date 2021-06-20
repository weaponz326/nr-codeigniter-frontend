// module contains only main navbar component

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { MainNavbarApiService } from './main-navbar-api.service';
import { MainFooterComponent } from './main-footer/main-footer.component';


@NgModule({
  declarations: [MainNavbarComponent, MainFooterComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
      MainNavbarComponent,
      MainFooterComponent
  ],
  providers: [
    MainNavbarApiService
  ]
})
export class MainNavbarModule { }
