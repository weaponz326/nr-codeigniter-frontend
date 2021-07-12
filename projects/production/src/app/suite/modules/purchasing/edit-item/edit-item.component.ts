import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';


@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  constructor() { }

  @ViewChild("editItemReference") editItemWindow: jqxWindowComponent;
  @ViewChild("okButtonReference") okButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("itemDescriptionReference") itemDescription: jqxInputComponent;
  @ViewChild("quantityReference") quantity: jqxNumberInputComponent;
  @ViewChild("priceReference") price: jqxNumberInputComponent;

  // emit event to commit data into grid in parent component
  @Output() editCommit = new EventEmitter<object>();
  @Output() deleteCommit = new EventEmitter<number>();

  itemId;

  ngOnInit(): void {
  }

  // widgets
  // ---------------------------------------------------------------------------------------------------

  // open edit item popup dialog window
  openWindow(event: any){
    this.editItemWindow.open();

    console.log(event.args.row.bounddata);
    this.itemId = event.args.row.bounddata.id;

    this.itemDescription.val(event.args.row.bounddata.item_description);
    this.quantity.val(event.args.row.bounddata.quantity);
    this.price.val(event.args.row.bounddata.price);
  }

  closeWindow(){
    this.editItemWindow.close();
  }

  saveItem(){
    let itemData = {
      id: this.itemId,
      purchasing: sessionStorage.getItem('purchasing_id'),
      item_description: this.itemDescription.val(),
      quantity: this.quantity.val(),
      price: this.price.val(),
    }

    console.log(itemData);
    this.editCommit.emit(itemData);

    this.closeWindow();
  }

  deleteItem(){
    this.deleteCommit.emit(this.itemId);
  }

}
