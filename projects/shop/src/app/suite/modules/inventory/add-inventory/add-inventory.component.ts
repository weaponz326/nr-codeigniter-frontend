import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { InventoryFormComponent } from '../inventory-form/inventory-form.component'

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {

  constructor() { }

  @ViewChild("addInventoryReference") addInventory: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("inventoryFormComponentReference") inventoryForm: InventoryFormComponent;

  // emit event to commit data into grid in parent component
  @Output() addCommit = new EventEmitter<any>();

  ngOnInit(): void {
  }

  openWindow(){
    this.addInventory.open();
  }

  saveInventory(){
    var inventoryData = {
      account: sessionStorage.getItem('shop_id'),
      product_id: this.inventoryForm.productId,
      location: this.inventoryForm.location.val(),
      container: this.inventoryForm.container.val(),
      bin_number: this.inventoryForm.binNumber.val(),
      quantity: this.inventoryForm.quantity.val(),
    }

    console.log(inventoryData);

    this.addCommit.emit(inventoryData);
  }


}
