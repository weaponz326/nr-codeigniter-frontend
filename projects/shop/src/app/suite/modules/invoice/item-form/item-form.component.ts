import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';

import { SelectProductComponent } from '../select-product/select-product.component'


@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  constructor() { }

  @ViewChild("productCodeReference") productCode: jqxNumberInputComponent;
  @ViewChild("productNameReference") productName: jqxNumberInputComponent;
  @ViewChild("quantityReference") quantity: jqxNumberInputComponent;
  @ViewChild("priceReference") price: jqxNumberInputComponent;

  @ViewChild("selectProductComponentReference") selectProduct: SelectProductComponent;

  productIdStore: any;

  ngOnInit(): void {
  }

  productSelected(product: any){
    console.log(product);

    this.productCode.val(product.product_code);
    this.productName.val(product.product_name);
    this.price.val(product.price);
    this.productIdStore = product.id;
  }


}
