import { Component, OnInit, ViewChild } from '@angular/core';

import { jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

@Component({
  selector: 'app-new-sheet',
  templateUrl: './new-sheet.component.html',
  styleUrls: ['./new-sheet.component.css']
})
export class NewSheetComponent implements OnInit {

  constructor() { }

  @ViewChild("newSheetReference") newSheet: jqxWindowComponent;
  @ViewChild("saveButtonReference") saveButton: jqxButtonComponent;
  @ViewChild("cancelButtonReference") cancelButton: jqxButtonComponent;
  @ViewChild("sheetNameReference")sheetName: jqxInputComponent;
  @ViewChild("sheeTypeReference")sheetType: jqxDropDownListComponent;

  ngOnInit(): void {
  }

  openWindow(){
    this.newSheet.open();
  }

  // widgets
  // -------------------------------------------------------------------------

  // sheet type source for dropdownlist
  typeSource: any[] = ["Weekly", "Monthly", "Quarterly"];

}
