import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';

@Component({
  selector: 'app-access-form',
  templateUrl: './access-form.component.html',
  styleUrls: ['./access-form.component.css']
})
export class AccessFormComponent implements OnInit {

  @ViewChild('adminCheckBoxReference') adminCheckBox: jqxComboBoxComponent;
  @ViewChild('assetsCheckBoxReference') assetsCheckBox: jqxComboBoxComponent;
  @ViewChild('billsCheckBoxReference') billsCheckBox: jqxComboBoxComponent;
  @ViewChild('bookingsCheckBoxReference') bookingsCheckBox: jqxComboBoxComponent;
  @ViewChild('checkinCheckBoxReference') checkinCheckBox: jqxComboBoxComponent;
  @ViewChild('guestsCheckBoxReference') guestsCheckBox: jqxComboBoxComponent;
  @ViewChild('paymentsCheckBoxReference') paymentsCheckBox: jqxComboBoxComponent;
  @ViewChild('portalCheckBoxReference') portalCheckBox: jqxComboBoxComponent;
  @ViewChild('roomsCheckBoxReference') roomsCheckBox: jqxComboBoxComponent;
  @ViewChild('servicesCheckBoxReference') servicesCheckBox: jqxComboBoxComponent;
  @ViewChild('settingsCheckBoxReference') settingsCheckBox: jqxComboBoxComponent;
  @ViewChild('staffCheckBoxReference') staffCheckBox: jqxComboBoxComponent;


  constructor() { }

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
      this.paymentsCheckBox.val('true');
      this.portalCheckBox.val('true');
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
      this.paymentsCheckBox.val('false');
      this.portalCheckBox.val('false');
      this.roomsCheckBox.val('false');
      this.servicesCheckBox.val('false');
      this.settingsCheckBox.val('false');
      this.staffCheckBox.val('false');
    }
  }

}
