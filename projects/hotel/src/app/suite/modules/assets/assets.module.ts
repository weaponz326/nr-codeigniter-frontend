import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';

import { AssetsRoutingModule } from './assets-routing.module';

import { AssetsWrapperComponent } from './assets-wrapper/assets-wrapper.component';
import { AllAssetsComponent } from './all-assets/all-assets.component';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { ViewAssetComponent } from './view-asset/view-asset.component';
import { AssetFormComponent } from './asset-form/asset-form.component';


@NgModule({
  declarations: [
    AssetsWrapperComponent,
    AllAssetsComponent,
    AddAssetComponent,
    ViewAssetComponent,
    AssetFormComponent
  ],
  imports: [
    CommonModule,
    AssetsRoutingModule,
    jqxGridModule,
    jqxButtonModule,
    jqxInputModule,
    jqxTextAreaModule,
    jqxDropDownListModule
  ]
})
export class AssetsModule { }
