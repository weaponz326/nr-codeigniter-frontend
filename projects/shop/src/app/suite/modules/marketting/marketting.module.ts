import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkettingRoutingModule } from './marketting-routing.module';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';

import { MarkettingWrapperComponent } from './marketting-wrapper/marketting-wrapper.component';
import { AllMarkettingComponent } from './all-marketting/all-marketting.component';
import { NewCampaignComponent } from './new-campaign/new-campaign.component';
import { ViewCampaignComponent } from './view-campaign/view-campaign.component';
import { CampaignFormComponent } from './campaign-form/campaign-form.component';


@NgModule({
  declarations: [
    MarkettingWrapperComponent, 
    AllMarkettingComponent, 
    NewCampaignComponent, 
    ViewCampaignComponent, 
    CampaignFormComponent
  ],
  imports: [
    CommonModule,
    MarkettingRoutingModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxDropDownListModule,
    jqxTextAreaModule
  ]
})
export class MarkettingModule { }
