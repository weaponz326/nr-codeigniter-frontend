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
  @ViewChild('adminCheckBoxReference') assetsCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') billsCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') bookingsCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') checkinCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') guestsCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') housekeepingCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') paymentsCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') portalCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') roomsCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') servicesCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') settingsCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') staffCheckBox: jqxComboBoxComponent;

  ngOnInit(): void {
  }

  setLevelAccess(level: string) {
    console.log("u are changing user level to " + level);

    if (level == 'Admin') {
      this.adminCheckBox.val('true');
      this.assetsCheckBox.val('true');
      this.billsCheckBox.val('true');
      this.bookingsCheckBox.val('true');
      this.checkinCheckBox.val('true');
      this.guestsCheckBox.val('true');
      this.housekeepingCheckBox.val('true');
      this.paymentsCheckBox.val('true');
      this.portalCheckBox.val('true');
      this.roomsCheckBox.val('true');
      this.servicesCheckBox.val('true');
      this.settingsCheckBox.val('true');
      this.staffCheckBox.val('true');
    }
    else if (level == 'Manager') {
      this.adminCheckBox.val('false');
      this.assetsCheckBox.val('true');
      this.billsCheckBox.val('true');
      this.bookingsCheckBox.val('true');
      this.checkinCheckBox.val('true');
      this.guestsCheckBox.val('true');
      this.housekeepingCheckBox.val('true');
      this.paymentsCheckBox.val('true');
      this.portalCheckBox.val('false');
      this.roomsCheckBox.val('true');
      this.servicesCheckBox.val('true');
      this.settingsCheckBox.val('false');
      this.staffCheckBox.val('true');

    }
    else if (level == 'Staff') {
      this.adminCheckBox.val('false');
      this.assetsCheckBox.val('false');
      this.billsCheckBox.val('false');
      this.bookingsCheckBox.val('false');
      this.checkinCheckBox.val('false');
      this.guestsCheckBox.val('false');
      this.housekeepingCheckBox.val('false');
      this.paymentsCheckBox.val('false');
      this.portalCheckBox.val('false');
      this.roomsCheckBox.val('false');
      this.servicesCheckBox.val('false');
      this.settingsCheckBox.val('false');
      this.staffCheckBox.val('false');
    }
  }

}
