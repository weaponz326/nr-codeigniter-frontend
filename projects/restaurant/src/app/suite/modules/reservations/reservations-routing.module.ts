import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservationsWrapperComponent } from './reservations-wrapper/reservations-wrapper.component';
import { AllReservationsComponent } from './all-reservations/all-reservations.component';


const routes: Routes = [
  {
    path: "",
    component: ReservationsWrapperComponent,
    children: [
      { path: "all_reservations", component: AllReservationsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationsRoutingModule { }
