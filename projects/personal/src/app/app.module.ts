import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainNavbarModule } from 'projects/application/src/app/main-navbar/main-navbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainNavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
