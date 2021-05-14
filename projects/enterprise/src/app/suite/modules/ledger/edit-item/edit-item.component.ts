import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

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

  @ViewChild("editItemReference") editItemWindow: jqxWindowComponent;
  @ViewChild("okButtonReference") okButton: jqxButtonComponent;
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("itemFormComponentReference") itemForm: ItemFormComponent

  // emit event to commit data into grid in parent component
  @Output() editCommit = new EventEmitter<object>();
  @Output() deleteCommit = new EventEmitter<object>();

  itemId: any;

  ngOnInit(): void {
  }

  openWindow(event: any){
    this.editItemWindow.open();

    console.log(event.args.row.bounddata);
    this.itemId = event.args.row.bounddata.id;

    this.itemForm.itemDateInput.val(event.args.row.bounddata.item_date);
    this.itemForm.referenceNumberInput.val(event.args.row.bounddata.reference);
    this.itemForm.descriptionInput.val(event.args.row.bounddata.description);
    this.itemForm.itemTypeDropDownList.val(event.args.row.bounddata.item_type);
    this.itemForm.amountInput.val(event.args.row.bounddata.amount);
  }

  closeWindow(){
    this.editItemWindow.close();
  }

  saveItem(){
    let itemData = {
      id: this.itemId,
      ledger: sessionStorage.getItem('ledger_id'),
      item_date: this.itemForm.itemDateInput.val(),
      item_type: this.itemForm.itemTypeDropDownList.val(),
      description: this.itemForm.descriptionInput.val(),
      amount: this.itemForm.amountInput.val(),
    }

    console.log(itemData);
    this.editCommit.emit(itemData);
    this.closeWindow();
  }

  deleteItem(){
    this.deleteCommit.emit(this.itemId);
    this.closeWindow();
  }

}
