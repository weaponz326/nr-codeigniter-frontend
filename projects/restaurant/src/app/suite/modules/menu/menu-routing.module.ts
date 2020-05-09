import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuWrapperComponent } from './menu-wrapper/menu-wrapper.component';
import { AllMenuItemsComponent } from './all-menu-items/all-menu-items.component';
import { AddMenuItemComponent } from './add-menu-item/add-menu-item.component';
import { ViewMenuItemComponent } from './view-menu-item/view-menu-item.component';


const routes: Routes = [
  {
    path: "",
    component: MenuWrapperComponent,
    children: [
      { path: "all_menu_items", component: AllMenuItemsComponent },
      { path: "add_menu_item", component: AddMenuItemComponent },
      { path: "view_menu_item", component: ViewMenuItemComponent }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
