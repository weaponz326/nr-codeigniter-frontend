import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';

import { PurchasingRoutingModule } from './purchasing-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { PurchasingWrapperComponent } from './purchasing-wrapper/purchasing-wrapper.component';
import { AllPurchasingComponent } from './all-purchasing/all-purchasing.component';
import { NewPurchasingComponent } from './new-purchasing/new-purchasing.component';
import { ViewPurchasingComponent } from './view-purchasing/view-purchasing.component';
import { PurchasingDetailsComponent } from './purchasing-details/purchasing-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';


@NgModule({
  declarations: [
    PurchasingWrapperComponent,
    AllPurchasingComponent,
    NewPurchasingComponent,
    ViewPurchasingComponent,
    PurchasingDetailsComponent,
    DashboardComponent,
    SettingsComponent,
    AddItemComponent,
    EditItemComponent
  ],
  imports: [
    CommonModule,
    PurchasingRoutingModule,
    UtilitiesModule,
    DashboardModule,
    ChartsModule,
    jqxButtonModule,
    jqxGridModule,
    jqxWindowModule,
    jqxInputModule,
    jqxNumberInputModule,
    jqxDateTimeInputModule,
    jqxComboBoxModule
  ]
})
export class PurchasingModule { }
