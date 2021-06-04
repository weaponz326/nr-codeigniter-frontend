import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { InventoryFormComponent } from '../inventory-form/inventory-form.component'


@Component({
  selector: 'app-edit-inventory',
  templateUrl: './edit-inventory.component.html',
  styleUrls: ['./edit-inventory.component.css']
})
export class EditInventoryComponent implements OnInit {

  constructor() { }

  @ViewChild("editInventoryReference") editInventory: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("inventoryFormComponentReference") inventoryForm: InventoryFormComponent;

  // emit event to commit data into grid in parent component
  @Output() editCommit = new EventEmitter<object>();
  @Output() deleteCommit = new EventEmitter<number>();

  inventoryId: any;

  ngOnInit(): void {
  }

  openWindow(event: any){
    this.editInventory.open();

    console.log(event.args.row.bounddata);
    this.inventoryId = event.args.row.bounddata.id;

    this.inventoryForm.location.val(event.args.row.bounddata.location);
    this.inventoryForm.container.val(event.args.row.bounddata.container);
    this.inventoryForm.binNumber.val(event.args.row.bounddata.bin_number);
    this.inventoryForm.quantity.val(event.args.row.bounddata.quantity);
  }

  closeWindow(){
    this.editInventory.close();
  }

  saveInventory(){
    var inventoryData = {
      id: this.inventoryId,
      account: sessionStorage.getItem('shop_id'),
      product: this.inventoryForm.productIdStore,
      location: this.inventoryForm.location.val(),
      container: this.inventoryForm.container.val(),
      bin_number: this.inventoryForm.binNumber.val(),
      quantity: this.inventoryForm.quantity.val(),
    }

    console.log(inventoryData);

    this.editCommit.emit(inventoryData);
    this.closeWindow();
  }

  deleteInventory(){
    this.deleteCommit.emit(this.inventoryId);
    this.closeWindow();
  }

}
