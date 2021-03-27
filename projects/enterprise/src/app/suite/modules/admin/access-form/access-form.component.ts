import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';

@Component({
  selector: 'app-access-form',
  templateUrl: './access-form.component.html',
  styleUrls: ['./access-form.component.css']
})
export class AccessFormComponent implements OnInit {

  constructor() { }

  @ViewChild('accountsCheckBoxReference') accountsCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') adminCheckBox: jqxComboBoxComponent;
  @ViewChild('appraisalCheckBoxReference') appraisalCheckBox: jqxComboBoxComponent;
  @ViewChild('assetsCheckBoxReference') assetsCheckBox: jqxComboBoxComponent;
  @ViewChild('attendanceCheckBoxReference') attendanceCheckBox: jqxComboBoxComponent;
  @ViewChild('budgetCheckBoxReference') budgetCheckBox: jqxComboBoxComponent;
  @ViewChild('employeesCheckBoxReference') employeesCheckBox: jqxComboBoxComponent;
  @ViewChild('filesCheckBoxReference') filesCheckBox: jqxComboBoxComponent;
  @ViewChild('leaveCheckBoxReference') leaveCheckBox: jqxComboBoxComponent;
  @ViewChild('ledgerCheckBoxReference') ledgerCheckBox: jqxComboBoxComponent;
  @ViewChild('lettersCheckBoxReference') lettersCheckBox: jqxComboBoxComponent;
  @ViewChild('payrollCheckBoxReference') payrollCheckBox: jqxComboBoxComponent;
  @ViewChild('portalCheckBoxReference') portalCheckBox: jqxComboBoxComponent;
  @ViewChild('procurementCheckBoxReference') procurementCheckBox: jqxComboBoxComponent;
  @ViewChild('receptionCheckBoxReference') receptionCheckBox: jqxComboBoxComponent;
  @ViewChild('settingsCheckBoxReference') settingsCheckBox: jqxComboBoxComponent;

  ngOnInit(): void {
  }

  setLevelAccess(level: string) {
    console.log("u are changing user level to " + level);

    if (level == 'Admin') {
      this.accountsCheckBox.val('true');
      this.adminCheckBox.val('true');
      this.appraisalCheckBox.val('true');
      this.assetsCheckBox.val('true');
      this.attendanceCheckBox.val('true');
      this.budgetCheckBox.val('true');
      this.employeesCheckBox.val('true');
      this.filesCheckBox.val('true');
      this.leaveCheckBox.val('true');
      this.ledgerCheckBox.val('true');
      this.lettersCheckBox.val('true');
      this.payrollCheckBox.val('true');
      this.portalCheckBox.val('true');
      this.procurementCheckBox.val('true');
      this.receptionCheckBox.val('true');
      this.settingsCheckBox.val('true');
    }
    else if (level == 'Manager') {
      this.accountsCheckBox.val('true');
      this.adminCheckBox.val('false');
      this.appraisalCheckBox.val('true');
      this.assetsCheckBox.val('true');
      this.attendanceCheckBox.val('true');
      this.budgetCheckBox.val('true');
      this.employeesCheckBox.val('true');
      this.filesCheckBox.val('true');
      this.leaveCheckBox.val('true');
      this.ledgerCheckBox.val('true');
      this.lettersCheckBox.val('true');
      this.payrollCheckBox.val('true');
      this.portalCheckBox.val('false');
      this.procurementCheckBox.val('true');
      this.receptionCheckBox.val('true');
      this.settingsCheckBox.val('false');
    }
    else if (level == 'Staff') {
      this.accountsCheckBox.val('false');
      this.adminCheckBox.val('false');
      this.appraisalCheckBox.val('false');
      this.assetsCheckBox.val('false');
      this.attendanceCheckBox.val('false');
      this.budgetCheckBox.val('false');
      this.employeesCheckBox.val('false');
      this.filesCheckBox.val('false');
      this.leaveCheckBox.val('false');
      this.ledgerCheckBox.val('false');
      this.lettersCheckBox.val('false');
      this.payrollCheckBox.val('false');
      this.portalCheckBox.val('false');
      this.procurementCheckBox.val('false');
      this.receptionCheckBox.val('false');
      this.settingsCheckBox.val('false');
    }
  }

}
