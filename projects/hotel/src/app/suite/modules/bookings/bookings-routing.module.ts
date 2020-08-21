import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllBookingsComponent } from './all-bookings/all-bookings.component';
import { BookingsWrapperComponent } from './bookings-wrapper/bookings-wrapper.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';


const routes: Routes = [
  {
    path: "",
    component: BookingsWrapperComponent,
    children: [
      { path: "", component: AllBookingsComponent },
      { path: "all-bookings", component: AllBookingsComponent },
      { path: "view-booking", component: ViewBookingComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
