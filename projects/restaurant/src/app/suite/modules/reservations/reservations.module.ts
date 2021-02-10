import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';

import { ReservationsRoutingModule } from './reservations-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';

import { ReservationsWrapperComponent } from './reservations-wrapper/reservations-wrapper.component';
import { AllReservationsComponent } from './all-reservations/all-reservations.component';
import { NewReservationComponent } from './new-reservation/new-reservation.component';
import { EditReservationComponent } from './edit-reservation/edit-reservation.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';


@NgModule({
  declarations: [
    ReservationsWrapperComponent,
    AllReservationsComponent,
    NewReservationComponent,
    EditReservationComponent,
    ReservationFormComponent
  ],
  imports: [
    CommonModule,
    ReservationsRoutingModule,
    UtilitiesModule,
    jqxButtonModule,
    jqxGridModule,
    jqxWindowModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxNumberInputModule,
    jqxDropDownListModule,
    jqxComboBoxModule
  ]
})
export class ReservationsModule { }
