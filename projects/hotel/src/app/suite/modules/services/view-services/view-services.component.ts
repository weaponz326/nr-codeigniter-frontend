import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist'
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox'

@Component({
  selector: 'app-view-services',
  templateUrl: './view-services.component.html',
  styleUrls: ['./view-services.component.css']
})
export class ViewServicesComponent implements OnInit {

  constructor() { }

  @ViewChild("servicesCodeReference") servicesCode: jqxInputComponent;
  @ViewChild("servicesTypeReference") servicesType: jqxComboBoxComponent;
  @ViewChild("guestNameReference") guestName: jqxDropDownListComponent;
  @ViewChild("guestCodeReference") guestCode: jqxDropDownListComponent;
  @ViewChild('saveButtonReference') saveButton: jqxButtonComponent;

  ngOnInit(): void {
  }

}
