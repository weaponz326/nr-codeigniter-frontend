import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxRadioButtonModule } from 'jqwidgets-ng/jqxradiobutton';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';

import { GuestsRoutingModule } from './guests-routing.module';

import { GuestsWrapperComponent } from './guests-wrapper/guests-wrapper.component';
import { AllGuestsComponent } from './all-guests/all-guests.component';
import { NewGuestComponent } from './new-guest/new-guest.component';
import { ViewGuestComponent } from './view-guest/view-guest.component';
import { GuestFormComponent } from './guest-form/guest-form.component';


@NgModule({
  declarations: [
    GuestsWrapperComponent,
    AllGuestsComponent,
    NewGuestComponent,
    ViewGuestComponent,
    GuestFormComponent
  ],
  imports: [
    CommonModule,
    GuestsRoutingModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxRadioButtonModule,
    jqxTextAreaModule
  ]
})
export class GuestsModule { }
