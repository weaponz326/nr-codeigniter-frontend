import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { ItemFormComponent } from '../item-form/item-form.component'

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor() { }

  @ViewChild("addItemReference") addItem: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("itemFormComponentReference") itemForm: ItemFormComponent;

  // emit event to commit data into grid in parent component
  @Output() addCommit = new EventEmitter<any>();

  ngOnInit(): void {
  }

  openWindow(){
    this.addItem.open();
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

    this.addCommit.emit(itemData);
  }

}
