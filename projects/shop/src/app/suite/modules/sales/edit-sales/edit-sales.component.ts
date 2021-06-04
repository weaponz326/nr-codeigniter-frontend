import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { SalesFormComponent } from '../sales-form/sales-form.component'


@Component({
  selector: 'app-edit-sales',
  templateUrl: './edit-sales.component.html',
  styleUrls: ['./edit-sales.component.css']
})
export class EditSalesComponent implements OnInit {

  constructor() { }

  @ViewChild("editSalesReference") editSales: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("salesFormComponentReference") salesForm: SalesFormComponent;

  // emit event to commit data into grid in parent component
  @Output() editCommit = new EventEmitter<object>();
  @Output() deleteCommit = new EventEmitter<number>();

  salesId: any;

  ngOnInit(): void {
  }

  openWindow(event: any){
    this.editSales.open();

    console.log(event.args.row.bounddata);
    this.salesId = event.args.row.bounddata.id;

    this.salesForm.salesCode.val(event.args.row.bounddata.sales_code);
    this.salesForm.salesDate.val(event.args.row.bounddata.sales_date);
    this.salesForm.unitPrice.val(event.args.row.bounddata.unit_price);
    this.salesForm.quantity.val(event.args.row.bounddata.quantity);
  }

  closeWindow(){
    this.editSales.close();
  }

  saveSales(){
    var salesData = {
      id: this.salesId,
      account: sessionStorage.getItem('shop_id'),
      sales_code: this.salesForm.salesCode.val(),
      sales_date: this.salesForm.salesDate.val(),
      product_id: this.salesForm.productId,
      unit_price: this.salesForm.unitPrice.val(),
      quantity: this.salesForm.quantity.val(),
    }

    console.log(salesData);

    this.editCommit.emit(salesData);
    this.closeWindow();
  }

  deleteSales(){
    this.deleteCommit.emit(this.salesId);
    this.closeWindow();
  }

}
