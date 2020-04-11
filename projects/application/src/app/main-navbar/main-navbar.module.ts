// module contains only main navbar component

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';



@NgModule({
  declarations: [MainNavbarComponent],
  imports: [
    CommonModule
  ],
  exports: [
      MainNavbarComponent
  ]
})
export class MainNavbarModule { }
