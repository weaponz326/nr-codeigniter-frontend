// main navbar is static while the rest of the page is lazy loaded

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavbarModule } from './main-navbar/main-navbar.module';
import { BudgetTablesComponent } from './suite/modules/budget/budget-tables/budget-tables.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetTablesComponent
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
