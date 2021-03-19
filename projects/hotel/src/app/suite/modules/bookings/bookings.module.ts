import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';

import { BookingsRoutingModule } from './bookings-routing.module';

import { BookingsWrapperComponent } from './bookings-wrapper/bookings-wrapper.component';
import { AllBookingsComponent } from './all-bookings/all-bookings.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    BookingsWrapperComponent,
    AllBookingsComponent,
    AddBookingComponent,
    ViewBookingComponent,
    BookingDetailsComponent,
    DashboardComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    BookingsRoutingModule,
    jqxGridModule,
    jqxButtonModule,
    jqxWindowModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxDropDownListModule
  ]
})
export class BookingsModule { }
