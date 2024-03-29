import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';

import { BookingsRoutingModule } from './bookings-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { BookingsWrapperComponent } from './bookings-wrapper/bookings-wrapper.component';
import { AllBookingsComponent } from './all-bookings/all-bookings.component';
import { AddBookingComponent } from './add-booking/add-booking.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AddBookedRoomComponent } from './add-booked-room/add-booked-room.component';
import { EditBookedRoomComponent } from './edit-booked-room/edit-booked-room.component';


@NgModule({
  declarations: [
    BookingsWrapperComponent,
    AllBookingsComponent,
    AddBookingComponent,
    ViewBookingComponent,
    BookingDetailsComponent,
    DashboardComponent,
    SettingsComponent,
    AddBookedRoomComponent,
    EditBookedRoomComponent
  ],
  imports: [
    CommonModule,
    BookingsRoutingModule,
    UtilitiesModule,
    DashboardModule,
    ChartsModule,
    jqxGridModule,
    jqxButtonModule,
    jqxWindowModule,
    jqxInputModule,
    jqxNumberInputModule,
    jqxDateTimeInputModule,
    jqxDropDownListModule
  ]
})
export class BookingsModule { }
