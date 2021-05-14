import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';

import { SelectMenuItemComponent } from '../select-menu-item/select-menu-item.component'
import { OrdersApiService } from '../orders-api.service';


@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  constructor(private ordersApi: OrdersApiService) { }

  @ViewChild("menuItemCodeReference") menuItemCode: jqxNumberInputComponent;
  @ViewChild("menuItemNameReference") menuItemName: jqxNumberInputComponent;
  @ViewChild("quantityReference") quantity: jqxNumberInputComponent;
  @ViewChild("priceReference") price: jqxNumberInputComponent;

  @ViewChild("selectMenuItemComponentReference") selectMenuItem: SelectMenuItemComponent;

  // stores id of menu item selected from dropdownlist
  menuItemIdStore: any;

  ngOnInit(): void {
  }

  menuItemSelected(menuItem: any){
    console.log(menuItem);

    this.menuItemCode.val(menuItem.item_code);
    this.menuItemName.val(menuItem.item_name);
    this.price.val(menuItem.price);
    this.menuItemIdStore = menuItem.id;
  }

}
