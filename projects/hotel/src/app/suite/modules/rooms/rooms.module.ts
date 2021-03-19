import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';

import { RoomsRoutingModule } from './rooms-routing.module';

import { RoomsWrapperComponent } from './rooms-wrapper/rooms-wrapper.component';
import { AllRoomsComponent } from './all-rooms/all-rooms.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { ViewRoomComponent } from './view-room/view-room.component';
import { RoomFormComponent } from './room-form/room-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    RoomsWrapperComponent,
    AllRoomsComponent,
    AddRoomComponent,
    ViewRoomComponent,
    RoomFormComponent,
    DashboardComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDropDownListModule,
    jqxTextAreaModule,
    jqxNumberInputModule
  ]
})
export class RoomsModule { }
