import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

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

  @ViewChild("addItemReference") addItemWindow: jqxWindowComponent;
  @ViewChild("okButtonReference") okButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;

  @ViewChild("itemFormComponentReference") itemForm: ItemFormComponent

  // emit event to commit data into grid in parent component
  @Output() addCommit = new EventEmitter<object>();

  ngOnInit(): void {
  }

  openWindow(){
    this.addItemWindow.open();
  }

}
