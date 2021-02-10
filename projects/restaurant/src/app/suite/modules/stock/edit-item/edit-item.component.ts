import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { ItemFormComponent } from '../item-form/item-form.component'


@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  constructor() { }

  @ViewChild("editItemReference") editItem: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("itemFormComponentReference") itemForm: ItemFormComponent;

  // emit event to commit data into grid in parent component
  @Output() editCommit = new EventEmitter<any>();
  @Output() deleteCommit = new EventEmitter<any>();

  ngOnInit(): void {
  }

  itemId: any;

  openWindow(event: any){
    this.editItem.open();

    console.log(event.args.row.bounddata);
    this.itemId = event.args.row.bounddata.id;

    this.itemForm.itemCode.val(event.args.row.bounddata.item_code);
    this.itemForm.itemName.val(event.args.row.bounddata.item_name);
    this.itemForm.category.val(event.args.row.bounddata.category);
    this.itemForm.itemType.val(event.args.row.bounddata.item_type);
    this.itemForm.quantity.val(event.args.row.bounddata.quantity);
    this.itemForm.refillOrdered.val(event.args.row.bounddata.refill_ordered);
  }

  saveItem(){
    var itemData = {
      restaurant: sessionStorage.getItem('restaurnat_id'),
      item_code: this.itemForm.itemCode.val(),
      item_name: this.itemForm.itemName.val(),
      category: this.itemForm.category.val(),
      item_type: this.itemForm.itemType.val(),
      quantity: this.itemForm.quantity.val(),
      refill_ordered: this.itemForm.refillOrdered.val(),
    }

    console.log(itemData);

    this.editCommit.emit(itemData);
  }

  deleteItem(){
    this.deleteCommit.emit(this.itemId);
  }

}
