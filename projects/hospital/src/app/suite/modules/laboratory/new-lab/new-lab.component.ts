import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

@Component({
  selector: 'app-new-lab',
  templateUrl: './new-lab.component.html',
  styleUrls: ['./new-lab.component.css']
})
export class NewLabComponent implements OnInit {

  constructor() { }

  @ViewChild("newLabReference") newLab: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("labCodeReference") labCode: jqxInputComponent;
  @ViewChild("labDateReference") labDate: jqxDateTimeInputComponent;
  @ViewChild("patientNameReference") patientName: jqxDropDownListComponent;
  @ViewChild("patientCodeReference") patientCode: jqxDropDownListComponent;
  @ViewChild("referedByReference") referedBy: jqxDropDownListComponent;
  @ViewChild("labTypeReference") labType: jqxInputComponent;

  openWindow(){
    this.newLab.open();
  }

  ngOnInit(): void {
  }

}
