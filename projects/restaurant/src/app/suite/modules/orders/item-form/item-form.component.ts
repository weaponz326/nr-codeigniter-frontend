import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';

import { OrdersApiService } from '../orders-api.service';


@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit, AfterViewInit {

  constructor(private ordersApi: OrdersApiService) { }

  @ViewChild("menuItemCodeReference") menuItemCode: jqxDropDownListComponent;
  @ViewChild("menuItemNameReference") menuItemName: jqxDropDownListComponent;
  @ViewChild("unitPriceReference") unitPrice: jqxNumberInputComponent;
  @ViewChild("Quantity") quantity: jqxNumberInputComponent;
  @ViewChild("priceReference") price: jqxNumberInputComponent;

  // stores id of menu item selected from dropdownlist
  menuItemId: any;

  menuItemsSource: any[];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.ordersApi.getMenuItems()
      .subscribe(
        res => {
          console.log(res);
          this.menuItemsSource = res;
        },
        err => {
          console.log(err);
        }
      )
  }

}
