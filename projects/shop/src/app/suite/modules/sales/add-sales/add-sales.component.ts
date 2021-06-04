import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { SalesFormComponent } from '../sales-form/sales-form.component'


@Component({
  selector: 'app-add-sales',
  templateUrl: './add-sales.component.html',
  styleUrls: ['./add-sales.component.css']
})
export class AddSalesComponent implements OnInit {

  constructor() { }

  @ViewChild("addSalesReference") addSales: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("salesFormComponentReference") salesForm: SalesFormComponent;

  // emit event to commit data into grid in parent component
  @Output() addCommit = new EventEmitter<any>();

  ngOnInit(): void {
  }

  openWindow(){
    this.addSales.open();
  }

  closeWindow(){
    this.addSales.close();
  }

  saveSales(){
    var salesData = {
      account: sessionStorage.getItem('shop_id'),
      sales_code: this.salesForm.salesCode.val(),
      sales_date: this.salesForm.salesDate.val(),
      product_id: this.salesForm.productId,
      unit_price: this.salesForm.unitPrice.val(),
      quantity: this.salesForm.quantity.val(),
    }

    console.log(salesData);

    this.addCommit.emit(salesData);
    this.closeWindow();
  }

}
