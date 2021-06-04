import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxListBoxModule } from 'jqwidgets-ng/jqxlistbox';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';
import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';

import { SuppliersRoutingModule } from './suppliers-routing.module';
import { UtilitiesModule } from 'projects/personal/src/app/suite/utilities/utilities.module';
import { DashboardModule } from 'projects/personal/src/app/suite/dashboard/dashboard.module';

import { SuppliersWrapperComponent } from './suppliers-wrapper/suppliers-wrapper.component';
import { AllSuppliersComponent } from './all-suppliers/all-suppliers.component';
import { NewSupplierComponent } from './new-supplier/new-supplier.component';
import { SupplierFormComponent } from './supplier-form/supplier-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ViewSupplierComponent } from './view-supplier/view-supplier.component';
import { SupplierProductsComponent } from './supplier-products/supplier-products.component';
import { SelectProductComponent } from './select-product/select-product.component';


@NgModule({
  declarations: [
    SuppliersWrapperComponent,
    AllSuppliersComponent,
    NewSupplierComponent,
    SupplierFormComponent,
    DashboardComponent,
    SettingsComponent,
    ViewSupplierComponent,
    SupplierProductsComponent,
    SelectProductComponent
  ],
  imports: [
    CommonModule,
    SuppliersRoutingModule,
    UtilitiesModule,
    DashboardModule,
    jqxGridModule,
    jqxButtonModule,
    jqxInputModule,
    jqxListBoxModule,
    jqxTextAreaModule,
    jqxWindowModule
  ]
})
export class SuppliersModule { }
