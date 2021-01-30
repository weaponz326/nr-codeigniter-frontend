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
  @ViewChild('adminCheckBoxReference') assessmentCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') attendanceCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') classesCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') feesCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') parentsCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') paymentsCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') portalCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') reportsCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') settingsCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') staffCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') studentsCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') subjectsCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') teachersCheckBox: jqxComboBoxComponent;
  @ViewChild('adminCheckBoxReference') timetablesCheckBox: jqxComboBoxComponent;

  ngOnInit(): void {
  }

  setLevelAccess(level: string) {
    console.log("u are changing user level to " + level);

    if (level == 'Admin') {
      this.adminCheckBox.val('true');
      this.assessmentCheckBox.val('true');
      this.attendanceCheckBox.val('true');
      this.classesCheckBox.val('true');
      this.feesCheckBox.val('true');
      this.parentsCheckBox.val('true');
      this.paymentsCheckBox.val('true');
      this.portalCheckBox.val('true');
      this.reportsCheckBox.val('true');
      this.settingsCheckBox.val('true');
      this.staffCheckBox.val('true');
      this.studentsCheckBox.val('true');
      this.subjectsCheckBox.val('true');
      this.teachersCheckBox.val('true');
      this.timetablesCheckBox.val('true');
    }
    else if (level == 'Manager') {
      this.adminCheckBox.val('false');
      this.assessmentCheckBox.val('true');
      this.attendanceCheckBox.val('true');
      this.classesCheckBox.val('true');
      this.feesCheckBox.val('true');
      this.parentsCheckBox.val('true');
      this.paymentsCheckBox.val('true');
      this.portalCheckBox.val('true');
      this.reportsCheckBox.val('true');
      this.settingsCheckBox.val('false');
      this.staffCheckBox.val('true');
      this.studentsCheckBox.val('true');
      this.subjectsCheckBox.val('true');
      this.teachersCheckBox.val('true');
      this.timetablesCheckBox.val('true');
    }
    else if (level == 'Staff') {
      this.adminCheckBox.val('false');
      this.assessmentCheckBox.val('false');
      this.attendanceCheckBox.val('false');
      this.classesCheckBox.val('false');
      this.feesCheckBox.val('false');
      this.parentsCheckBox.val('false');
      this.paymentsCheckBox.val('false');
      this.portalCheckBox.val('false');
      this.reportsCheckBox.val('false');
      this.settingsCheckBox.val('false');
      this.staffCheckBox.val('false');
      this.studentsCheckBox.val('false');
      this.subjectsCheckBox.val('false');
      this.teachersCheckBox.val('false');
      this.timetablesCheckBox.val('false');
    }
  }

}
