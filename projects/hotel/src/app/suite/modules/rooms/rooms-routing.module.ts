import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomsWrapperComponent } from './rooms-wrapper/rooms-wrapper.component';
import { AllRoomsComponent } from './all-rooms/all-rooms.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { ViewRoomComponent } from './view-room/view-room.component';


const routes: Routes = [
  {
    path: "",
    component: RoomsWrapperComponent,
    children: [
      { path: "all_rooms", component: AllRoomsComponent },
      { path: "add_room", component: AddRoomComponent },
      { path: "view_room", component: ViewRoomComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
