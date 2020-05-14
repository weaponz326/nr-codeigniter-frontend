import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist'
import { jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox'

@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrls: ['./add-services.component.css']
})
export class AddServicesComponent implements OnInit {

  constructor() { }

  @ViewChild("addServicesReference") addServices: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("servicesCodeReference") servicesCode: jqxInputComponent;
  @ViewChild("servicesTypeReference") servicesType: jqxComboBoxComponent;
  @ViewChild("guestNameReference") guestName: jqxDropDownListComponent;
  @ViewChild("guestCodeReference") guestCode: jqxDropDownListComponent;

  openWindow(){
    this.addServices.open();
  }

  ngOnInit(): void {
  }

}
