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
  @ViewChild('admissionsCheckBoxReference') admissionsCheckBox: jqxComboBoxComponent;
  @ViewChild('appointmentsCheckBoxReference') appointmentsCheckBox: jqxComboBoxComponent;
  @ViewChild('billsCheckBoxReference') billsCheckBox: jqxComboBoxComponent;
  @ViewChild('diagnosisCheckBoxReference') diagnosisCheckBox: jqxComboBoxComponent;
  @ViewChild('doctorsCheckBoxReference') doctorsCheckBox: jqxComboBoxComponent;
  @ViewChild('drugsCheckBoxReference') drugsCheckBox: jqxComboBoxComponent;
  @ViewChild('laboratoryCheckBoxReference') laboratoryCheckBox: jqxComboBoxComponent;
  @ViewChild('nursesCheckBoxReference') nursesCheckBox: jqxComboBoxComponent;
  @ViewChild('patientsCheckBoxReference') patientsCheckBox: jqxComboBoxComponent;
  @ViewChild('paymentsCheckBoxReference') paymentsCheckBox: jqxComboBoxComponent;
  @ViewChild('portalCheckBoxReference') portalCheckBox: jqxComboBoxComponent;
  @ViewChild('prescriptionsCheckBoxReference') prescriptionsCheckBox: jqxComboBoxComponent;
  @ViewChild('settingsCheckBoxReference') settingsCheckBox: jqxComboBoxComponent;
  @ViewChild('staffCheckBoxReference') staffCheckBox: jqxComboBoxComponent;
  @ViewChild('wardsCheckBoxReference') wardsCheckBox: jqxComboBoxComponent;

  ngOnInit(): void {
  }

  setLevelAccess(level: string) {
    console.log("u are changing user level to " + level);

    if (level == 'Admin') {
      this.adminCheckBox.val('true');
      this.admissionsCheckBox.val('true');
      this.appointmentsCheckBox.val('true');
      this.billsCheckBox.val('true');
      this.diagnosisCheckBox.val('true');
      this.doctorsCheckBox.val('true');
      this.drugsCheckBox.val('true');
      this.laboratoryCheckBox.val('true');
      this.nursesCheckBox.val('true');
      this.patientsCheckBox.val('true');
      this.paymentsCheckBox.val('true');
      this.portalCheckBox.val('true');
      this.prescriptionsCheckBox.val('true');
      this.settingsCheckBox.val('true');
      this.staffCheckBox.val('true');
      this.wardsCheckBox.val('true');
    }
    else if (level == 'Manager') {
      this.adminCheckBox.val('false');
      this.admissionsCheckBox.val('true');
      this.appointmentsCheckBox.val('true');
      this.billsCheckBox.val('true');
      this.diagnosisCheckBox.val('true');
      this.doctorsCheckBox.val('true');
      this.drugsCheckBox.val('true');
      this.laboratoryCheckBox.val('true');
      this.nursesCheckBox.val('true');
      this.patientsCheckBox.val('true');
      this.paymentsCheckBox.val('true');
      this.portalCheckBox.val('true');
      this.prescriptionsCheckBox.val('true');
      this.settingsCheckBox.val('false');
      this.staffCheckBox.val('true');
      this.wardsCheckBox.val('true');
    }
    else if (level == 'Staff') {
      this.adminCheckBox.val('false');
      this.admissionsCheckBox.val('false');
      this.appointmentsCheckBox.val('false');
      this.billsCheckBox.val('false');
      this.diagnosisCheckBox.val('false');
      this.doctorsCheckBox.val('false');
      this.drugsCheckBox.val('false');
      this.laboratoryCheckBox.val('false');
      this.nursesCheckBox.val('false');
      this.patientsCheckBox.val('false');
      this.paymentsCheckBox.val('false');
      this.portalCheckBox.val('false');
      this.prescriptionsCheckBox.val('false');
      this.settingsCheckBox.val('false');
      this.staffCheckBox.val('false');
      this.wardsCheckBox.val('false');
    }
  }

}
