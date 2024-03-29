import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor() { }

  @ViewChild("addItemReference") addItemWindow: jqxWindowComponent;
  @ViewChild("okButtonReference") okButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("itemDescriiptionReference") itemDescription: jqxInputComponent;
  @ViewChild("quantityReference") quantity: jqxNumberInputComponent;
  @ViewChild("priceReference") price: jqxNumberInputComponent;

  // emit event to commit data into grid in parent component
  @Output() addCommit = new EventEmitter<object>();

  ngOnInit(): void {
  }

  // widgets
  // ---------------------------------------------------------------------------------------------------

  // open add item popup dialog window
  openWindow(){
    this.addItemWindow.open();
  }

  closeWindow(){
    this.addItemWindow.close();
  }

  saveItem(){
    let itemData = {
      purchasing: sessionStorage.getItem('purchasing_id'),
      item_description: this.itemDescription.val(),
      quantity: this.quantity.val(),
      price: this.price.val(),
    }

    console.log(itemData);
    this.addCommit.emit(itemData);

    this.closeWindow();
  }

}
