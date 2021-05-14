import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  @ViewChild("addItemReference") addItemWindow: jqxWindowComponent;
  @ViewChild("okButtonReference") okButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("descriptionReference") descriptionInput: jqxInputComponent;
  @ViewChild("amountReference") amountInput: jqxNumberInputComponent;

  // emit event to commit data into grid in parent component
  @Output() addCommit = new EventEmitter<object>();

  ngOnInit(): void {
  }

  itemData: any;

  // open add item popup dialog window
  openWindow(){
    this.addItemWindow.open();
  }

  closeWindow(){
    this.addItemWindow.close();
  }

  saveItem(){
    this.itemData = {
      item: this.descriptionInput.val(),
      amount: this.amountInput.val(),
    }

    console.log(this.itemData);
    this.addCommit.emit(this.itemData);
    this.closeWindow()
  }


}
