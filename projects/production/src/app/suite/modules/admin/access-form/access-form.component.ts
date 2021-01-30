import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';

@Component({
  selector: 'app-access-form',
  templateUrl: './access-form.component.html',
  styleUrls: ['./access-form.component.css']
})
export class AccessFormComponent implements OnInit {

  constructor() { }

  @ViewChild('adminCheckBoxReference') adminCheckBox: jqxComboBoxComponent;
  @ViewChild('contractorsCheckBoxReference') contractorsCheckBox: jqxComboBoxComponent;
  @ViewChild('equipmentCheckBoxReference') equipmentCheckBox: jqxComboBoxComponent;
  @ViewChild('manufacturingCheckBoxReference') manufacturingCheckBox: jqxComboBoxComponent;
  @ViewChild('ordersCheckBoxReference') ordersCheckBox: jqxComboBoxComponent;
  @ViewChild('portalCheckBoxReference') portalCheckBox: jqxComboBoxComponent;
  @ViewChild('productsCheckBoxReference') productsCheckBox: jqxComboBoxComponent;
  @ViewChild('projectsCheckBoxReference') projectsCheckBox: jqxComboBoxComponent;
  @ViewChild('purchasingCheckBoxReference') purchasingCheckBox: jqxComboBoxComponent;
  @ViewChild('schedulesCheckBoxReference') schedulesCheckBox: jqxComboBoxComponent;
  @ViewChild('settingsCheckBoxReference') settingsCheckBox: jqxComboBoxComponent;
  @ViewChild('stockCheckBoxReference') stockCheckBox: jqxComboBoxComponent;
  @ViewChild('tasksCheckBoxReference') tasksCheckBox: jqxComboBoxComponent;
  @ViewChild('workersCheckBoxReference') workersCheckBox: jqxComboBoxComponent;

  ngOnInit(): void {
  }

  setLevelAccess(level: string) {
    console.log("u are changing user level to " + level);

    if (level == 'Admin') {
      this.adminCheckBox.val('true');
      this.contractorsCheckBox.val('true');
      this.equipmentCheckBox.val('true');
      this.manufacturingCheckBox.val('true');
      this.ordersCheckBox.val('true');
      this.portalCheckBox.val('true');
      this.productsCheckBox.val('true');
      this.projectsCheckBox.val('true');
      this.purchasingCheckBox.val('true');
      this.schedulesCheckBox.val('true');
      this.settingsCheckBox.val('true');
      this.stockCheckBox.val('true');
      this.tasksCheckBox.val('true');
      this.workersCheckBox.val('true');
    }
    else if (level == 'Manager') {
      this.adminCheckBox.val('false');
      this.contractorsCheckBox.val('true');
      this.equipmentCheckBox.val('true');
      this.manufacturingCheckBox.val('true');
      this.ordersCheckBox.val('true');
      this.portalCheckBox.val('true');
      this.productsCheckBox.val('true');
      this.projectsCheckBox.val('true');
      this.purchasingCheckBox.val('true');
      this.schedulesCheckBox.val('true');
      this.settingsCheckBox.val('false');
      this.stockCheckBox.val('true');
      this.tasksCheckBox.val('true');
      this.workersCheckBox.val('true');
    }
    else if (level == 'Staff') {
      this.adminCheckBox.val('false');
      this.contractorsCheckBox.val('false');
      this.equipmentCheckBox.val('false');
      this.manufacturingCheckBox.val('false');
      this.ordersCheckBox.val('false');
      this.portalCheckBox.val('false');
      this.productsCheckBox.val('false');
      this.projectsCheckBox.val('false');
      this.purchasingCheckBox.val('false');
      this.schedulesCheckBox.val('false');
      this.settingsCheckBox.val('false');
      this.stockCheckBox.val('false');
      this.tasksCheckBox.val('false');
      this.workersCheckBox.val('false');
    }
  }

}
