import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';

@Component({
  selector: 'app-access-form',
  templateUrl: './access-form.component.html',
  styleUrls: ['./access-form.component.css']
})
export class AccessFormComponent implements OnInit {

  @ViewChild('adminCheckBoxReference') adminCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') cashflowCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') customersCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') inventoryCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') invoiceCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') markettingCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') ordersCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') payablesCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') paymentsCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') productsCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') portalCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') purchasingCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') receivablesCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') salesCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') settingsCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') staffCheckBox: jqxComboBoxComponent;

  constructor() { }

  ngOnInit(): void {
  }

  setLevelAccess(level: string) {
    console.log("u are changing user level to " + level);

    if (level == 'Admin') {
      this.adminCheckBox.val('true');
      this.cashflowCheckBox.val('true');
      this.customersCheckBox.val('true');
      this.inventoryCheckBox.val('true');
      this.invoiceCheckBox.val('true');
      this.markettingCheckBox.val('true');
      this.ordersCheckBox.val('true');
      this.payablesCheckBox.val('true');
      this.paymentsCheckBox.val('true');
      this.productsCheckBox.val('true');
      this.portalCheckBox.val('true');
      this.purchasingCheckBox.val('true');
      this.receivablesCheckBox.val('true');
      this.salesCheckBox.val('true');
      this.settingsCheckBox.val('true');
      this.staffCheckBox.val('true');
    }
    else if (level == 'Manager') {
      this.adminCheckBox.val('false');
      this.cashflowCheckBox.val('true');
      this.customersCheckBox.val('true');
      this.inventoryCheckBox.val('true');
      this.invoiceCheckBox.val('true');
      this.markettingCheckBox.val('true');
      this.ordersCheckBox.val('true');
      this.payablesCheckBox.val('true');
      this.paymentsCheckBox.val('true');
      this.productsCheckBox.val('true');
      this.portalCheckBox.val('true');
      this.purchasingCheckBox.val('true');
      this.receivablesCheckBox.val('true');
      this.salesCheckBox.val('true');
      this.settingsCheckBox.val('false');
      this.staffCheckBox.val('true');
    }
    else if (level == 'Staff') {
      this.adminCheckBox.val('false');
      this.cashflowCheckBox.val('false');
      this.customersCheckBox.val('false');
      this.inventoryCheckBox.val('false');
      this.invoiceCheckBox.val('false');
      this.markettingCheckBox.val('false');
      this.ordersCheckBox.val('false');
      this.payablesCheckBox.val('false');
      this.paymentsCheckBox.val('false');
      this.productsCheckBox.val('false');
      this.portalCheckBox.val('false');
      this.purchasingCheckBox.val('false');
      this.receivablesCheckBox.val('false');
      this.salesCheckBox.val('false');
      this.settingsCheckBox.val('false');
      this.staffCheckBox.val('false');
    }
  }

}
