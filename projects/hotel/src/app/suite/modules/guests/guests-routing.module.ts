import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestsWrapperComponent } from './guests-wrapper/guests-wrapper.component';
import { AllGuestsComponent } from './all-guests/all-guests.component';
import { NewGuestComponent } from './new-guest/new-guest.component';
import { ViewGuestComponent } from './view-guest/view-guest.component';


const routes: Routes = [
  {
    path: "",
    component: GuestsWrapperComponent,
    children: [
      { path: "all_guests", component: AllGuestsComponent },
      { path: "new_guest", component: NewGuestComponent },
      { path: "view_guest", component: ViewGuestComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestsRoutingModule { }
