import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';


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
  @ViewChild("deleteButtonReference") deleteButton: jqxButtonComponent;
  @ViewChild("descriptionReference") descriptionInput: jqxInputComponent;
  @ViewChild("amountReference") amountInput: jqxNumberInputComponent;

  // emit event to commit data into grid in parent component
  @Output() editCommit = new EventEmitter<object>();
  @Output() deleteCommit = new EventEmitter<number>();

  ngOnInit(): void {
  }

  // widgets
  // ---------------------------------------------------------------------------------------------------

  itemData: any;
  itemId: number;

  // open add account popup dialog window
  openWindow(event: any){
    this.editItemWindow.open();

    console.log(event.args.row.bounddata);
    this.itemId = event.args.row.bounddata.id;

    this.descriptionInput.val(event.args.row.bounddata.item);
    this.amountInput.val(event.args.row.bounddata.amount);
  }

  closeWindow(){
    this.editItemWindow.close();
  }

  saveItem(){
    this.itemData = {
      id: this.itemId,
      item: this.descriptionInput.val(),
      amount: this.amountInput.val(),
    }

    console.log(this.itemData);
    this.editCommit.emit(this.itemData);
    this.closeWindow();
  }

  deleteItem(){
    this.deleteCommit.emit(this.itemId);
  }

}
