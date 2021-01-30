import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
import { jqxPanelComponent } from 'jqwidgets-ng/jqxpanel';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  @ViewChild('firstNameReference') nameInput: jqxInputComponent;
  @ViewChild('typeReference') typeComboBox: jqxComboBoxComponent;
  @ViewChild('locationReference') locationInput: jqxInputComponent;
  @ViewChild('aboutReference') aboutTextArea: jqxTextAreaComponent;
  @ViewChild('logoPanelReference') logoPanel: jqxPanelComponent;
  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;

  ngOnInit(): void {
  }

}
