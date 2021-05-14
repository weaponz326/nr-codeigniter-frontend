import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

import { ItemFormComponent } from '../item-form/item-form.component';


@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  constructor() { }

  @ViewChild("editItemReference") editItemWindow: jqxWindowComponent;
  @ViewChild("okButtonReference") okButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("itemFormComponentReference") itemForm: ItemFormComponent

  // emit event to commit data into grid in parent component
  @Output() editCommit = new EventEmitter<object>();
  @Output() deleteCommit = new EventEmitter<number>();

  ngOnInit(): void {
  }

  // widgets
  // ---------------------------------------------------------------------------------------------------

  itemId: number;

  // open edit account popup dialog window
  openWindow(event: any){
    this.editItemWindow.open();

    console.log(event.args.row.bounddata);
    this.itemId = event.args.row.bounddata.id;

    this.itemForm.menuItemCode.val(event.args.row.bounddata.item_code);
    this.itemForm.menuItemName.val(event.args.row.bounddata.item_name);
    this.itemForm.quantity.val(event.args.row.bounddata.quantity);
  }

  closeWindow(){
    this.editItemWindow.close();
  }

  saveItem(){
    let detailData = {
      id: this.itemId,
      order: sessionStorage.getItem('order_id'),
      menu_item_id: this.itemForm.menuItemIdStore,
      quantity: this.itemForm.quantity.val(),
    }

    console.log(detailData);
    this.editCommit.emit(detailData);

    this.closeWindow();
  }

  deleteItem(){
    this.deleteCommit.emit(this.itemId);
  }

}
