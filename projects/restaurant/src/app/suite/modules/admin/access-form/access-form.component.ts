import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';

@Component({
  selector: 'app-access-form',
  templateUrl: './access-form.component.html',
  styleUrls: ['./access-form.component.css']
})
export class AccessFormComponent implements OnInit {

  @ViewChild('adminCheckBoxReference') adminCheckBox: jqxComboBoxComponent;
  @ViewChild('customersCheckBoxReference') customersCheckBox: jqxComboBoxComponent;
  @ViewChild('deliveriesCheckBoxReference') deliveriesCheckBox: jqxComboBoxComponent;
  @ViewChild('menuCheckBoxReference') menuCheckBox: jqxComboBoxComponent;
  @ViewChild('ordersCheckBoxReference') ordersCheckBox: jqxComboBoxComponent;
  @ViewChild('paymentsCheckBoxReference') paymentsCheckBox: jqxComboBoxComponent;
  @ViewChild('portalCheckBoxReference') portalCheckBox: jqxComboBoxComponent;
  @ViewChild('settingsCheckBoxReference') settingsCheckBox: jqxComboBoxComponent;
  @ViewChild('staffCheckBoxReference') staffCheckBox: jqxComboBoxComponent;
  @ViewChild('reservationsCheckBoxReference') reservationsCheckBox: jqxComboBoxComponent;
  @ViewChild('tablesCheckBoxReference') tablesCheckBox: jqxComboBoxComponent;

  constructor() { }

  ngOnInit(): void {
  }

  setLevelAccess(level: string) {
    console.log("u are changing user level to " + level);

    if (level == 'Admin') {
      this.adminCheckBox.val('true');
      this.customersCheckBox.val('true');
      this.deliveriesCheckBox.val('true');
      this.menuCheckBox.val('true');
      this.ordersCheckBox.val('true');
      this.paymentsCheckBox.val('true');
      this.portalCheckBox.val('true');
      this.settingsCheckBox.val('true');
      this.staffCheckBox.val('true');
      this.reservationsCheckBox.val('true');
      this.tablesCheckBox.val('true');
    }
    else if (level == 'Manager') {
      this.adminCheckBox.val('false');
      this.customersCheckBox.val('true');
      this.deliveriesCheckBox.val('true');
      this.menuCheckBox.val('true');
      this.ordersCheckBox.val('true');
      this.paymentsCheckBox.val('true');
      this.portalCheckBox.val('true');
      this.settingsCheckBox.val('false');
      this.staffCheckBox.val('true');
      this.reservationsCheckBox.val('true');
      this.tablesCheckBox.val('true');
    }
    else if (level == 'Staff') {
      this.adminCheckBox.val('false');
      this.customersCheckBox.val('false');
      this.deliveriesCheckBox.val('false');
      this.menuCheckBox.val('false');
      this.ordersCheckBox.val('false');
      this.paymentsCheckBox.val('false');
      this.portalCheckBox.val('false');
      this.settingsCheckBox.val('false');
      this.staffCheckBox.val('false');
      this.reservationsCheckBox.val('false');
      this.tablesCheckBox.val('false');
    }
  }

}
