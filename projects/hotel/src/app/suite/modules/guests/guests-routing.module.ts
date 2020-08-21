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
      { path: "", component: AllGuestsComponent },
      { path: "all-guests", component: AllGuestsComponent },
      { path: "new-guest", component: NewGuestComponent },
      { path: "view-guest", component: ViewGuestComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestsRoutingModule { }
