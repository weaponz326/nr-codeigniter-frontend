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
  @ViewChild('portalCheckBoxReference') portalCheckBox: jqxComboBoxComponent;
  @ViewChild('settingsCheckBoxReference') settingsCheckBox: jqxComboBoxComponent;

  ngOnInit(): void {
  }

  setLevelAccess(level: string) {
    console.log("u are changing user level to " + level);

    if (level == 'Admin') {
      this.adminCheckBox.val('true');
      this.portalCheckBox.val('true');
      this.settingsCheckBox.val('true');
    }
    else if (level == 'Manager') {
      this.adminCheckBox.val('false');
      this.portalCheckBox.val('false');
      this.settingsCheckBox.val('false');
    }
    else if (level == 'Staff') {
      this.adminCheckBox.val('false');
      this.portalCheckBox.val('false');
      this.settingsCheckBox.val('false');
    }
  }

}
