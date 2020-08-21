import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';

@Component({
  selector: 'app-menu-item-form',
  templateUrl: './menu-item-form.component.html',
  styleUrls: ['./menu-item-form.component.css']
})
export class MenuItemFormComponent implements OnInit {

  @ViewChild('itemCodeReference') itemCode: jqxInputComponent;
  @ViewChild('itemNameReference') itemName: jqxInputComponent;
  @ViewChild('categoryReference') category: jqxComboBoxComponent;
  @ViewChild('priceReference') price: jqxNumberInputComponent;
  @ViewChild('descriptionReference') description: jqxTextAreaComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
