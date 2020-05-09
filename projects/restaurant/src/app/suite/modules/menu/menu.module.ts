import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxComboBoxModule } from 'jqwidgets-ng/jqxcombobox';
import { jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';
import { jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';

import { MenuWrapperComponent } from './menu-wrapper/menu-wrapper.component';
import { AllMenuItemsComponent } from './all-menu-items/all-menu-items.component';
import { AddMenuItemComponent } from './add-menu-item/add-menu-item.component';
import { ViewMenuItemComponent } from './view-menu-item/view-menu-item.component';
import { MenuItemFormComponent } from './menu-item-form/menu-item-form.component';


@NgModule({
  declarations: [
    MenuWrapperComponent, 
    AllMenuItemsComponent, 
    AddMenuItemComponent, 
    ViewMenuItemComponent, 
    MenuItemFormComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    jqxButtonModule,
    jqxGridModule,
    jqxInputModule,
    jqxComboBoxModule,
    jqxTextAreaModule,
    jqxNumberInputModule
  ]
})
export class MenuModule { }
