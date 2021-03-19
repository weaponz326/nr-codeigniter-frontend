import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputModule } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';

import { AssetsRoutingModule } from './assets-routing.module';

import { AssetsWrapperComponent } from './assets-wrapper/assets-wrapper.component';
import { AllAssetsComponent } from './all-assets/all-assets.component';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { ViewAssetComponent } from './view-asset/view-asset.component';
import { AssetFormComponent } from './asset-form/asset-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    AssetsWrapperComponent,
    AllAssetsComponent,
    AddAssetComponent,
    ViewAssetComponent,
    AssetFormComponent,
    DashboardComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    AssetsRoutingModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxDateTimeInputModule,
    jqxNumberInputModule,
    jqxDropDownListModule,
    jqxTextAreaModule
  ]
})
export class AssetsModule { }
