import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';


@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  constructor() { }

  @ViewChild('itemCodeReference') itemCode: jqxInputComponent;
  @ViewChild('itemNameReference') itemName: jqxInputComponent;
  @ViewChild('categoryReference') category: jqxComboBoxComponent;
  @ViewChild('itemTypeReference') itemType: jqxComboBoxComponent;
  @ViewChild('quantityReference') quantity: jqxNumberInputComponent;
  @ViewChild('refillOrderedReference') refillOrdered: jqxNumberInputComponent;

  ngOnInit(): void {
  }

}
